import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () =>
      import('./features/accueil/accueil.module').then((m) => m.AccueilModule),
  },
  {
    path: 'equipes',
    loadChildren: () =>
      import('./features/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'statistiques',
    loadChildren: () =>
      import('./features/stats/stats.module').then((m) => m.StatsModule),
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./features/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'inscription',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
