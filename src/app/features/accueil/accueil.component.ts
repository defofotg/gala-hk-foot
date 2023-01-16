import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LastEventComponent } from './last-event/last-event.component';
import { NextEventComponent } from './next-event/next-event.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LastEventComponent,
    NextEventComponent,
    TopScorersComponent,
  ],
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
