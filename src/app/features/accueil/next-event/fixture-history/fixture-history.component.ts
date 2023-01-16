import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { statConstants } from 'src/app/shared/constants';
import { VersusTeamComponent } from 'src/app/shared/versus-team/versus-team.component';
import { StatComponent } from './stat/stat.component';

@Component({
  standalone: true,
  imports: [CommonModule, VersusTeamComponent, StatComponent],
  selector: 'app-fixture-history',
  templateUrl: './fixture-history.component.html',
  styleUrls: ['./fixture-history.component.scss'],
})
export class FixtureHistoryComponent {
  win = statConstants.win;
  draw = statConstants.draw;
  scored = statConstants.goals;
}
