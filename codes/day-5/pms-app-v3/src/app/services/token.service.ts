import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {
  // private storage = new BehaviorSubject<string>('');
  // storageObservable = this.storage.asObservable()

  saveToken(token: string) {
    sessionStorage.setItem('token', token)
    //this.storage.next(token)
  }
  getToken() {
    return sessionStorage.getItem('token')
    //return this.storage.getValue()
  }
  isLoggedIn() {
    return sessionStorage.getItem('token') ? true : false
    //return this.storage.getValue() !== '' ? true : false
  }
  removeToken() {
    sessionStorage.removeItem('token')
    //this.storage.next('')
  }
}
