import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoriesModule } from '../dashboard/pages/categories/categories.module';
import { HomeComponent } from '../dashboard/pages/home/home.component';
import { PipesModule } from '../dashboard/pages/pipes/pipes.module';
import { RxjsExampleModule } from '../dashboard/pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from '../dashboard/pages/rxjs-introduccion/rxjs-introduccion.module';
import { UsersModule } from '../dashboard/pages/users/users.module';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    PipesModule,
    RxjsExampleModule,
    RxjsIntroduccionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCard,
    MatDatepickerModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('../dashboard/pages/cursos/cursos.module').then(m => m.CursosModule),
      },
      {
        path: 'user/:id',
        component: UserDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'home', 
      }
    ])
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}


