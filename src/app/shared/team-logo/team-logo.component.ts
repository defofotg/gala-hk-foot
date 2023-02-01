import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/next-event';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.scss'],
})
export class TeamLogoComponent {
  private _color = 'yellow';
  private _name = '';

  @Input() set team(value: Team) {
    if (value) {
      this._color = value.color;
      this._name = value.name;
    }
  }

  get color(): string {
    return this._color;
  }

  get name(): string {
    return this._name;
  }
}
