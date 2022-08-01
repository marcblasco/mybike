import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8080/mibike/bicicletas';
  constructor(private http: HttpClient, private router: Router) { }

  
  signUpUser(user:any) { // corregir
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user:any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }
  pruebaGit(user:any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}