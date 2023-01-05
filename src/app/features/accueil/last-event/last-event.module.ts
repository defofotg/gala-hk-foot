import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusTeamModule } from 'src/app/shared/versus-team/versus-team.module';
import { LastEventComponent } from './last-event.component';

@NgModule({
  declarations: [LastEventComponent],
  imports: [CommonModule, VersusTeamModule],
  exports: [LastEventComponent],
})
export class LastEventModule {}
