import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  register(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/signup', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/signin', data);
  }

  forgetPassword(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/forgotPasswords', data);
  }

  verifiaction(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/verifyResetCode', data);
  }

  saveToken(token: string) {
    if (typeof window != 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (typeof window != 'undefined') {
      return localStorage.getItem('token');
    } else return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logOut() {
    if (typeof window != 'undefined') {
      this.router.navigate(['/login']);
      localStorage.clear();
    }
  }

  decodToken() {
    try {
      const decoded = jwtDecode(localStorage.getItem('token')!);
    } catch {
      this.logOut();
    }
  }
}
