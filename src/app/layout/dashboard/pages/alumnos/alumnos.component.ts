import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Alumno } from './models/index';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
roles: any;
onalumnoSubmitted: any;
alumno: any;
onDeleteUser(_t58: any) {
throw new Error('Method not implemented.');
}
totalItems: unknown;
pageSize: unknown;
onPage($event: PageEvent) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = ['id', 'fullName','lastname', 'email', 'password','role'];
  dataSource: Alumno[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@mail.com',
      password: '123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasu@mail.com',
      password: '123456',
      role: 'USER',
    },
  ];

  onUserSubmitted(ev: Alumno): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
}