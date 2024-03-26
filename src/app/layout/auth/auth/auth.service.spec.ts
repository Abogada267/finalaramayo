import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../dashboard/pages/users/models/index';
import { MOCK_USER } from "../auth/auth.service";

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: User | null = null;

  constructor(private http: HttpClient) { }

  login(data: LoginData): Observable<boolean> {
    
    return this.http.post<boolean>('URL_DE_TU_ENDPOINT_DE_INICIO_DE_SESION', data).pipe(
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.setAuthUser(MOCK_USER);
          return true; 
        } else {
          return false; 
        }
      }),
      catchError(() => {
        return of(false); 
      })
    );
  }

  private setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem('token', 'ldsjdm348342kjewkjksfdmsakjdsad');
  }

  logout(): void {
    this.authUser = null;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    
    return !!this.authUser;
  }
}


