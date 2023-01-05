import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusTeamComponent } from './versus-team.component';
import { TeamLogoModule } from '../team-logo/team-logo.module';

@NgModule({
  declarations: [VersusTeamComponent],
  exports: [VersusTeamComponent],
  imports: [CommonModule, TeamLogoModule],
})
export class VersusTeamModule {}
