import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AlertsService } from '../../../core/services/alerts.service';
import { LoadingService } from '../../../core/services/loading.service';
import { User } from '../../dashboard/pages/users/models/index';

interface LoginData {
  email: null | string;
  password: null | string;
}
const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};
  
@Injectable({ providedIn: 'root'})
export class AuthService {
  authUser: User | null = null;
  
  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService
   
  ) { }
  
  private setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem(
      'token',
      'ldsjdm348342kjewkjksfdmsakjdsad'
    );
  }
 login(data: LoginData): void {
const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};
   
  
  if(
    data.email === MOCK_USER.email &&
   data.password===MOCK_USER.password
  ){
    this.setAuthUser = (MOCK_USER);
    this.router.navigate(['dashboard', 'home']);
  } else {
    this.alertsService.showError('Email o password invalidos');
    }
      }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
  this.loadingService.setIsLoading(true);
    return of(localStorage.getItem('token')).pipe(delay(1000),
      map((response) => !!response),
      tap(() => {
        this.setAuthUser(MOCK_USER);
      }),
    finalize(() => this.loadingService.setIsLoading(false))
  )
  }
  }