import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';
import { AlertsService } from '../../../core/services/alerts.service';
import { LoadingService } from '../../../core/services/loading.service';
import { User } from '../../dashboard/pages/users/models/index';

interface LoginData {
  email: string | null;
  password: string | null;
}

export const MOCK_USER: User = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: User | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService
  ) {}

  isLoggedIn(): Observable<boolean> {
    const isLoggedIn = !!localStorage.getItem('token');
    return of(isLoggedIn);
  }

  private setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem('token', 'ldsjdm348342kjewkjksfdmsakjdsad');
  }

  login(data: LoginData): Observable<void> {
    
    return this.http.post<any>('http://localhost:3000/api/login', data).pipe(
      tap((response) => {
      
        if (response && response.success) {
         
          this.setAuthUser(MOCK_USER);
          this.router.navigate(['dashboard', 'home']);
        } else {
          
          this.alertsService.showError('Email o contraseña incorrectos');
        }
      }),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  logout(): void {
    // Limpiamos cualquier información de usuario almacenada al cerrar sesión
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken(): Observable<boolean> {
    this.loadingService.setIsLoading(true);
    return of(localStorage.getItem('token')).pipe(
      delay(1000),
      map((token) => !!token),
      tap((tokenExists) => {
        if (tokenExists) {
          // Si el token existe, podemos establecer al usuario autenticado
          this.setAuthUser(MOCK_USER);
        }
      }),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }
}

