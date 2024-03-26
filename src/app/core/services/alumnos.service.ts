import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Alumno } from '../../layout/dashboard/pages/alumnos/models/index';
import { Pagination } from '../models/pagination';
import { AlertsService } from './alerts.service';


const ROLES_DB: string[] = ['ADMIN', 'USER'];

@Injectable({
  providedIn: 'root' 
})
export class AlumnosService {


  constructor(
    private alerts: AlertsService,
    private httpClient: HttpClient
  ) {}


  generateString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

 
  getAlumnosById(id: number | string): Observable<Alumno | undefined> {
  return this.httpClient.get<Alumno>(`${environment.apiURL}/alumno/${id}`)
    .pipe(
      catchError(() => {
        // Manejo de errores
        return of(undefined);
      })
    );
}

   

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }

 
  getAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/alumnos`)
      .pipe(
        catchError(() => {
          // Manejo de errores
          this.alerts.showError('Error al cargar los usuarios');
          return of([]);
        })
      );
  }
  
 
  paginate(page: number, perPage = 5): Observable<Pagination<Alumno>> {
    return this.httpClient.get<Pagination<Alumno>>(
      `${environment.apiURL}/alumnos?_page=${page}&_per_page=${perPage}`
    );
  }

 
  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.httpClient.post<Alumno>(`${environment.apiURL}/alumnos`, alumno);
} 
     
  
  deleteUser(alumnoID: number): Observable<Alumno[]> {
    return this.httpClient.delete<Alumno[]>(`${environment.apiURL}/alumnos/${alumnoID}`)
      .pipe(
        mergeMap(() => this.getAlumnos())
      );
  }

  // Método para obtener todos los compradores
  getAllBuyers(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/alumnos?role=BUYER`);
  }
}

