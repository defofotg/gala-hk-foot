import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-event-fixture',
  templateUrl: './event-fixture.component.html',
  styleUrls: ['./event-fixture.component.scss'],
})
export class EventFixtureComponent {}
