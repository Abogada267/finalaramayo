import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/pages/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
})
export class AuthModule {}
