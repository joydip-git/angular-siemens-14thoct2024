import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { ApiResponse } from '../../models/apiresponse';
import { APP_CONSTANTS } from '../../utilities/appconstants';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }
  authenticate(user: User): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${APP_CONSTANTS.USERS_API_URL}/authenticate`, user)
  }

  register(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${APP_CONSTANTS.USERS_API_URL}/register`, user)
  }
}
