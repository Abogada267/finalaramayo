import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
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
    MatTable,
    MatTableModule,
    MatColumnDef,
  ],
  providers: [CursosService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class CursosModule { }
