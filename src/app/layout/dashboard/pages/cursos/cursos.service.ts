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
      {
        id: 1,
        name: "Derecho Penal",
        createAt: new Date(),
      },
      {
        id: 2,
        name: "Derecho Familia",
        createAt: new Date(),
      },
      {
        id: 3,
        name: "Derecho Sucesorio",
        createAt: new Date(),
      }
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
