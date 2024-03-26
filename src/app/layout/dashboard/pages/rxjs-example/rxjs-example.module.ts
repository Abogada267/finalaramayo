import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RxjsExampleComponent } from './rxjs-example.component';
@NgModule({
  declarations: [RxjsExampleComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatCard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [RxjsExampleComponent],
})
export class RxjsExampleModule {}
