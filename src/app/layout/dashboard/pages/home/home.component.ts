import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Home } from '../home/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeNameInput: string = '';
  homeData: any; 
  productsService: any; 
  
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
   
  }

  updateHomeName(event: any): void {
    this.homeNameInput = (event.target as HTMLInputElement).value;
  }

  navegarAotraPagina(): void {
    console.log('../alumnos');
    this.router.navigate(['../alumnos']); 
  }

  onCreate(): void {
   
  }

  onEdit(product: Home) {
   
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
  
    }
  }
}

export { Home };
