import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumno } from './models/index';

@Component({
  selector: 'app-alumnos',
  templateUrl:'./alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  roles: any;
  totalItems: number = 0;
  pageSize: number = 5;
  displayedColumns: string[] = ['id', 'firstName', 'lastname', 'email', 'password', 'role'];
  dataSource: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.loadAlumnos();
    this.loadRoles();
  }

  loadRoles(): void {
    this.alumnosService.getRoles().subscribe((roles: any) => {
      this.roles = roles;
    });
  }

  loadAlumnos(pageNumber: number = 0): void {
    const offset = pageNumber * this.pageSize;
    this.alumnosService.paginate(pageNumber, this.pageSize).subscribe((paginationData: any) => {
      this.dataSource = paginationData.items;
      this.totalItems = paginationData.totalCount;
    });
  }

  onPage(event: PageEvent): void {
    const pageNumber = event.pageIndex;
    this.loadAlumnos(pageNumber);
  }

  onSubmitAlumno(formValue: any): void {
    this.alumnosService.createAlumno(formValue).subscribe((alumno: Alumno) => {
      this.dataSource.push(alumno); // Agrega el nuevo alumno a la lista actual
      // O carga nuevamente los datos de los alumnos desde el servidor si no estás usando paginación
    });
  }

  onDeleteAlumno(id: number): void {
    
  }
}

