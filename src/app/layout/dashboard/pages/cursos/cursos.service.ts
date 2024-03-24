import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Cursos } from "../cursos/models/index";


@Injectable()
export class CursosService{
    
getCursos(){
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
             
]
    return of(cursos);
    }
 }