import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { UsersService } from '../../../../../core/services/users.service';
import { HomeService } from "../../home/home.service";
import { SalesService } from '../sales.service';
import { SalesActions } from './sales.actions';

@Injectable()
export class SalesEffects {
  loadSales$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos solamente las acciones que nos interesan, en este caso solamente las acciones de tipo loadSales
      ofType(SalesActions.loadSales),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.salesService.getSales().pipe(
          // AQUI MANEJAMOS EL SUCCESS
          map((data) => SalesActions.loadSalesSuccess({ data })),
          // CATCH ERROR PARA ATRAPAR UN ERROR SI LO HUBIESE
          catchError((error) => of(SalesActions.loadSalesFailure({ error })))
        )
      )
    );
  });

  loadBuyer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.loadBuyers),
      concatMap(() =>
        this.usersService.getAllBuyers().pipe(
          map((resp) => SalesActions.loadBuyersSuccess({ data: resp })),
          catchError((error) => {
            return of(SalesActions.loadBuyersFailure({ error }));
          })
        )
      )
    );
  });

  

  createSale$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.createSale),
      concatMap((action) => {
        return this.salesService.createSale(action.data).pipe(
          map((resp) => SalesActions.createSaleSuccess({ data: resp })),
          catchError((error) => of(SalesActions.createSaleFailure({ error })))
        );
      })
    );
  });

  createSaleSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.createSaleSuccess),
      map(() => SalesActions.loadSales())
    );
  });

  // loadSalesSucessOrFailure$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(SalesActions.loadSalesSuccess, SalesActions.loadSalesFailure),
  //     concatMap((action) => {
  //       ///
  //     })
  //   );
  // });

  constructor(
    private actions$: Actions,
    private salesService: SalesService,
    private usersService: UsersService,
    private HomeService: HomeService
  ) {}
}
