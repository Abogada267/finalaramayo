import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosRoutingModule } from '../cursos/cursos-routing.module';
import { CursosComponent } from '../cursos/cursos.component';
import { CursosService } from '../cursos/cursos.service';


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
