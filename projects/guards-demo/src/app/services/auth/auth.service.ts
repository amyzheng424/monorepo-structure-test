import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    // Your authentication logic here
    // Return true if the user is authenticated, false otherwise
    return this.getToken() !== null;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login({ username, password }: any): Observable<any> {
    // verify the user, check if it is authenticated
    if (
      (username === 'amy' ||
        username === 'admin' ||
        username === 'admin@gmail.com') &&
      password === '123'
    ) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Amy Zheng', email: 'admin@gmail.com' });
    } else {
      return of(null);
      // throw new Error('Failed to login');
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
