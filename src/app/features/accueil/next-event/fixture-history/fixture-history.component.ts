import { Component, OnInit } from '@angular/core';
import { constants, statConstants } from 'src/app/shared/constants';

@Component({
  selector: 'app-fixture-history',
  templateUrl: './fixture-history.component.html',
  styleUrls: ['./fixture-history.component.scss'],
})
export class FixtureHistoryComponent {
  win = statConstants.win;
  draw = statConstants.draw;
  scored = statConstants.goals;
}
