import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventFixtureComponent } from './event-fixture/event-fixture.component';
import { FixtureHistoryComponent } from './fixture-history/fixture-history.component';

@Component({
  standalone: true,
  imports: [CommonModule, EventFixtureComponent, FixtureHistoryComponent],
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.scss'],
})
export class NextEventComponent {}
