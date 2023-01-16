import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.scss'],
})
export class TeamLogoComponent {
  private _color = '';
  private _name = '';

  @Input() set color(value: string) {
    this._color = value;
  }

  get color(): string {
    return this._color;
  }

  @Input() set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }
}
