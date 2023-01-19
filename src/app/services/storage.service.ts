import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo, UserTokenInfo } from '../models/user';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private loggedInInfo: BehaviorSubject<boolean>;
  private userInfoSubject: BehaviorSubject<UserInfo>;

  constructor() {
    this.loggedInInfo = new BehaviorSubject<boolean>(this.isLoggedIn());
    this.userInfoSubject = new BehaviorSubject<UserInfo>(this.getUser());
  }

  public clean(): void {
    this.setValue(false);
    window.sessionStorage.clear();
    this.userInfoSubject.next({ firstName: '', lastName: '' });
  }

  public saveUser(user: UserTokenInfo): void {
    this.setValue(true);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.userInfoSubject.next(user?.userInfo);
  }

  public getUser(): UserInfo {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return (JSON.parse(user) as UserTokenInfo)?.userInfo;
    }

    return {} as UserInfo;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  getLoginStatusObservable(): Observable<boolean> {
    return this.loggedInInfo.asObservable();
  }

  getUserInfo(): Observable<UserInfo> {
    return this.userInfoSubject.asObservable();
  }

  setValue(newValue: boolean): void {
    this.loggedInInfo.next(newValue);
  }
}
