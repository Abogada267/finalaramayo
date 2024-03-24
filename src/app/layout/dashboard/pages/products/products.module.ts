import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIcon } from '@angular/material/icon';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [ProductsComponent, ProductDialogComponent],
  imports: [CommonModule,  ProductsRoutingModule, MatIcon],
  providers: [ProductsService],
})
export class ProductsModule {}
