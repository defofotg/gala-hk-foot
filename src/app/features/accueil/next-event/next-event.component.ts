import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/http/event.service';
import { EventFixture } from 'src/app/models/next-event';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { EventFixtureComponent } from './event-fixture/event-fixture.component';
import { FixtureHistoryComponent } from './fixture-history/fixture-history.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    EventFixtureComponent,
    FixtureHistoryComponent,
    LoaderComponent,
  ],
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.scss'],
})
export class NextEventComponent implements OnInit {
  _eventFixture: Observable<EventFixture>;

  constructor(readonly eventService: EventService) {
    this._eventFixture = new Observable<EventFixture>();
  }

  ngOnInit(): void {
    this._eventFixture = this.eventService.getNextEventInfo();
  }
}
