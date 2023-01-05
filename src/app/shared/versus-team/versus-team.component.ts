import { Component } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-versus-team',
  templateUrl: './versus-team.component.html',
  styleUrls: ['./versus-team.component.scss'],
})
export class VersusTeamComponent {
  yellow = constants.yellow;
  red = constants.red;
}
