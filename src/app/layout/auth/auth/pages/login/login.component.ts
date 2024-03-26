import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
  
    this.loginForm.markAllAsTouched();

  
    if (this.loginForm.invalid) {
      return;
    }

 
    this.loading = true;
    this.AuthService.login(this.loginForm.value).subscribe(
      (      response: any) => {
       
        console.log('Login successful:', response);
        this.loading = false;
       
      },
      (      error: any) => {
        
        console.error('Login error:', error);
        this.loading = false;
        this.error = 'Error al iniciar sesión. Por favor, verifique sus credenciales.';
      }
    );
  }
}


