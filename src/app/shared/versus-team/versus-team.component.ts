import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { constants } from '../constants';
import { TeamLogoComponent } from '../team-logo/team-logo.component';

@Component({
  standalone: true,
  imports: [CommonModule, TeamLogoComponent],
  selector: 'app-versus-team',
  templateUrl: './versus-team.component.html',
  styleUrls: ['./versus-team.component.scss'],
})
export class VersusTeamComponent {
  yellow = constants.yellow;
  red = constants.red;
}
