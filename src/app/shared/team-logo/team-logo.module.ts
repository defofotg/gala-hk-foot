import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamLogoComponent } from './team-logo.component';

@NgModule({
  declarations: [TeamLogoComponent],
  exports: [TeamLogoComponent],
  imports: [CommonModule],
})
export class TeamLogoModule {}
