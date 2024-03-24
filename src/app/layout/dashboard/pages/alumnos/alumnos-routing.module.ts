import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /alumnos
        path: '',
        component: AlumnosComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}