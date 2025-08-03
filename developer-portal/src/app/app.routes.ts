import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'interfaces',
    loadComponent: () =>
      import('./temp/interfaces-placeholder.component').then(m => m.InterfacesPlaceholderComponent)
  },
  {
    path: 'cert-upload',
    loadComponent: () =>
      import('./temp/cert-placeholder.component').then(m => m.CertPlaceholderComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
