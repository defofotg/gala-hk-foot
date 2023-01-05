import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent {
  private _title: string = '';
  private _value: string = '';

  @Input() set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  @Input() set value(value: string) {
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}