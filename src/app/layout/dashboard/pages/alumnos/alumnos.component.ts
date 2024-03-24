import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumno } from './models/index';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  [x: string]: any;
  
  constructor(private alumnosService: AlumnosService) { }

  roles: any;
  totalItems: number = 0;
  pageSize: number = 5;
  displayedColumns: string[] = ['id', 'fullName', 'lastname', 'email', 'password', 'role'];
  dataSource: Alumno[] = [];

  ngOnInit(): void {
    this.loadAlumnos();
    this.loadRoles();
  }

  loadRoles(): void {
    this['AlumnosService'].getRoles().subscribe((roles: any) => {
      this.roles = roles;
    });
  }

  loadAlumnos(): void {
   this['AlumnosService'].getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.dataSource = alumnos;
    });
  }

  onPage(event: PageEvent): void {
    // Implementar la lógica de paginación si es necesario
  }

  onUserSubmitted(ev: Alumno): void {
    // Aquí puedes llamar al método correspondiente del servicio para crear un nuevo alumno
    // y luego actualizar la lista de alumnos
  }

  onDeleteUser(id: number): void {
    // Aquí puedes llamar al método correspondiente del servicio para eliminar un alumno
    // y luego actualizar la lista de alumnos
  }
}
