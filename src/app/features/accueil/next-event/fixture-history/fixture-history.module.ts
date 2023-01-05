import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusTeamModule } from 'src/app/shared/versus-team/versus-team.module';
import { FixtureHistoryComponent } from './fixture-history.component';
import { StatModule } from './stat/stat.module';

@NgModule({
  declarations: [FixtureHistoryComponent],
  imports: [CommonModule, VersusTeamModule, StatModule],
  exports: [FixtureHistoryComponent],
})
export class FixtureHistoryModule {}
