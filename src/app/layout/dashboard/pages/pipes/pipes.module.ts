import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { FirstNamePipe } from '../../../../shared/full-name.pipe';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, MatCard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [],
  providers: [DatePipe, FirstNamePipe],
})
export class PipesModule {}
