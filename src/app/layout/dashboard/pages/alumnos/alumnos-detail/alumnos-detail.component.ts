import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { Alumno } from '../models';

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',
  styleUrls: ['./alumnos-detail.component.scss'],
})
export class AlumnosDetailComponent implements OnInit {
  alumno: Alumno | undefined;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAlumno();
  }
 getAlumno(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam !== null) {
    const id = +idParam;
    this.alumnosService
      .getAlumnosById(id)
      .subscribe((alumno: Alumno | undefined) => this.alumno = alumno);
  } else {
    console.error('ID parameter is null');
  }
}

      goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.alumno) {
      this.alumnosService.getAlumnos()
        .subscribe(() => this.goBack());
    }
  }
}
