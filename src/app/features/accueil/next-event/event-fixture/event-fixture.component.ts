import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EventService } from 'src/app/http/event.service';
import { EventFixture } from 'src/app/models/next-event';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { FixtureTypePipe } from 'src/app/shared/pipes/fixture-type.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, LoaderComponent, FixtureTypePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  selector: 'app-event-fixture',
  templateUrl: './event-fixture.component.html',
  styleUrls: ['./event-fixture.component.scss'],
})
export class EventFixtureComponent implements OnInit {
  _eventFixture: Observable<EventFixture>;

  constructor(readonly eventService: EventService) {
    this._eventFixture = new Observable<EventFixture>();
  }

  ngOnInit(): void {
    this._eventFixture = this.eventService.getNextEvent();
  }
}
