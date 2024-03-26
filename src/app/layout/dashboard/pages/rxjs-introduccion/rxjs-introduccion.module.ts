import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RxjsIntroduccionComponent } from './rxjs-introduccion.component';

@NgModule({
  declarations: [RxjsIntroduccionComponent],
  imports: [CommonModule, MatCard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [RxjsIntroduccionComponent],
})
export class RxjsIntroduccionModule {}
