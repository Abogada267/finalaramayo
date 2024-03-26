import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CursosService } from '../cursos/cursos.service';
import { Cursos } from './models/index';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Cursos[] = [];
  displayedColumns: string[] = ['id', 'courseName', 'createAt', 'actions'];  

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.loadCursos(); 
  }

  loadCursos(): void {
    this.cursosService.getCursos().subscribe({
      next: (cursos: Cursos[]) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.error('Error loading cursos:', error); 
      }
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) { 
      this.cursosService.deleteCursoById(id).subscribe({
        next: () => {
          console.log('Curso deleted successfully.'); 
          this.loadCursos(); 
        },
        error: (error) => {
          console.error('Error deleting curso:', error); 
        }
      });
    }
  }
}




