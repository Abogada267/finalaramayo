import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { Cursos } from './models/index';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {

  displayedColumns: string[] = ['id', 'curseName', 'createAt', 'action'];
  
  Cursos: Cursos[] = [];

  constructor(private CursosService: CursosService) { 
  this.CursosService.getCursos().subscribe({
    next: (Cursos: any) => {
      this.Cursos = Cursos;
    }
  })

  }
  }
  
  
 


