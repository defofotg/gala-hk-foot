import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserTokenInfo } from '../models/user';
import { StorageService } from '../services/storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  public signIn(user: User): Observable<UserTokenInfo> {
    return this.http.post<UserTokenInfo>(
      AUTH_API + 'signin',
      {
        login: user.email,
        password: user.password,
      },
      httpOptions
    );
  }

  public logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
