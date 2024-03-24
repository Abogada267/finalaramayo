import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cursos } from '../cursos/models';

@Component({
  selector: 'app-edit-curso-dialog',
  templateUrl: './edit-curso-dialog.component.html',
  styleUrls: ['./edit-curso-dialog.component..scss']
})
export class EditCursoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos
  ) {}

  // Agrega aquí la lógica para editar el curso
}
