import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  saveToken(token: string) {
    sessionStorage.setItem('token', token)
  }
  getToken() {
    return sessionStorage.getItem('token')
  }
  isLoggedIn() {
    return sessionStorage.getItem('token') ? true : false
  }
  removeToken() {
    sessionStorage.removeItem('token')
  }
}
