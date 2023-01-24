import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private loggedInInfo: BehaviorSubject<boolean>;

  constructor() {
    this.loggedInInfo = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  public clean(): void {
    this.setValue(false);
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    this.setValue(true);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
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

  setValue(newValue: boolean): void {
    this.loggedInInfo.next(newValue);
  }
}
