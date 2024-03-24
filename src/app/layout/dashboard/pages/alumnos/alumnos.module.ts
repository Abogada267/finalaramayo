import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AlumnosFormComponent } from "../alumnos/components/alumnos-form/alumnos-form.component";
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosComponent } from './alumnos.component';

@NgModule({
  declarations: [AlumnosComponent,AlumnosDetailComponent,AlumnosSearchComponent,AlumnosFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    MatPaginator,
  
  ],
  exports: [AlumnosComponent],
  providers: [
    //AlumnosService,
    // {
    //   provide: AlumnosService,
    //   useClass: AlumnosMockService,
    // },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AlumnoModule { }
