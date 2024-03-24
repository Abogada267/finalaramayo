import { Injectable } from '@angular/core';

@Injectable()
export class AlumnosMockService {
  constructor() {
    console.log('Se instancio el servicio MOCK');
  }

  getUsers() {
    console.log('Se obtuvieron los usuarios falsos');
    return ['Lucas', 'Rodolfo', 'Matias', 'Josefina'];
  }
}