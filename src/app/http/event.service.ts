import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventFixture } from '../models/next-event';

const EVENT_API = 'http://localhost:8080/api/fixture/';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  public getNextEvent(): Observable<EventFixture> {
    return this.http.get<EventFixture>(EVENT_API + 'next');
  }
}
