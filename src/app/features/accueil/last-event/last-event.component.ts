import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VersusTeamComponent } from 'src/app/shared/versus-team/versus-team.component';

@Component({
  standalone: true,
  imports: [CommonModule, VersusTeamComponent],
  selector: 'app-last-event',
  templateUrl: './last-event.component.html',
  styleUrls: ['./last-event.component.scss'],
})
export class LastEventComponent {}
