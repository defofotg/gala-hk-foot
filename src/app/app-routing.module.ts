import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccueilComponent } from './features/accueil/accueil.component';
import { AdministrationComponent } from './features/administration/administration.component';
import { StatsComponent } from './features/stats/stats.component';
import { TeamsComponent } from './features/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'equipes', component: TeamsComponent },
      { path: 'statistiques', component: StatsComponent },
      { path: 'administration', component: AdministrationComponent },
    ],
  },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
