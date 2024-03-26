import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MatCard } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SaleDialogComponent } from './components/sale-dialog/sale-dialog.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesEffects } from './store/sales.effects';
import { salesFeature } from './store/sales.reducer';

@NgModule({
  declarations: [SalesComponent, SaleDialogComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatCard,
    StoreModule.forFeature(salesFeature),
    EffectsModule.forFeature([SalesEffects]),
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class SalesModule {}
