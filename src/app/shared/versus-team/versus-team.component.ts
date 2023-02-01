import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/next-event';
import { TeamLogoComponent } from '../team-logo/team-logo.component';

@Component({
  standalone: true,
  imports: [CommonModule, TeamLogoComponent],
  selector: 'app-versus-team',
  templateUrl: './versus-team.component.html',
  styleUrls: ['./versus-team.component.scss'],
})
export class VersusTeamComponent {
  @Input() hostTeam!: Team;
  @Input() guestTeam!: Team;
}
