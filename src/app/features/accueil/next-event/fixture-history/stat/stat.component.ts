import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent {
  private _title = '';
  private _value = 0;

  @Input() set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  @Input() set value(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
