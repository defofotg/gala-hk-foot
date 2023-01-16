import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () =>
      import('./features/accueil/accueil.component').then(
        (m) => m.AccueilComponent
      ),
  },
  {
    path: 'equipes',
    loadComponent: () =>
      import('./features/teams/teams.component').then((m) => m.TeamsComponent),
  },
  {
    path: 'statistiques',
    loadComponent: () =>
      import('./features/stats/stats.component').then((m) => m.StatsComponent),
  },
  {
    path: 'administration',
    loadComponent: () =>
      import('./features/administration/administration.component').then(
        (m) => m.AdministrationComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'connexion',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./registration/registration.component').then(
        (m) => m.RegistrationComponent
      ),
  },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
];
