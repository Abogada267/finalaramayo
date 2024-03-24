import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MatTable
  ],
  providers: [CursosService]
})
export class CursosModule { }
