import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../users/models/index';
import { SalesActions } from '../../store/sales.actions';
import {
  selectSalesBuyers
} from '../../store/sales.selectors';

@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrl: './sale-dialog.component.scss',
})
export class SaleDialogComponent {
  buyers$: Observable<User[]>;
  

  saleForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<SaleDialogComponent>
  ) {
    this.saleForm = this.formBuilder.group({
      productId: this.formBuilder.control(''),
      userId: this.formBuilder.control(''),
    });

    this.store.dispatch(SalesActions.loadBuyers());
  

    
    this.buyers$ = this.store.select(selectSalesBuyers);
  }

  onSubmit(): void {
    if (this.saleForm.invalid) {
      this.saleForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        SalesActions.createSale({ data: this.saleForm.value })
      );
      this.matDialogRef.close();
    }
  }
}
