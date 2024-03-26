import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Cursos } from "../cursos/models/index";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  createCurso: any;
  constructor(private http: HttpClient) {}

  getCursos(): Observable<Cursos[]> {
    const cursos: Cursos[] = [
     
    ];
    return of(cursos);
  }

  deleteCursoById(id: number): Observable<any> {
    return this.http.delete<any>(`/api/cursos/${id}`);
  }
   updateCursoById(id: number, curso: Cursos): Observable<any> {
    return this.http.put<any>(`/api/cursos/${id}`, curso);
  }
}
