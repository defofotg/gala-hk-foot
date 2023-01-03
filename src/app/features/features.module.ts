import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilModule } from './accueil/accueil.module';
import { AdministrationModule } from './administration/administration.module';
import { StatsModule } from './stats/stats.module';
import { TeamsModule } from './teams/teams.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccueilModule,
    AdministrationModule,
    StatsModule,
    TeamsModule,
  ],
})
export class FeaturesModule {}
