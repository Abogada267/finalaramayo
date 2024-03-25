import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstNamePipe } from '../../../../shared/full-name.pipe';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [],
  providers: [DatePipe, FirstNamePipe],
})
export class PipesModule {}
