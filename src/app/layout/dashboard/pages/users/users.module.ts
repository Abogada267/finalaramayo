import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersRoutingModule } from './user-rauting.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UsersComponent, UserDetailComponent,UserFormComponent],
  imports: [
    CommonModule,
     MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatPaginator,
  
  ],
  exports: [UsersComponent],
  providers: [
    //UsersService,
    // {
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class UsersModule {}
