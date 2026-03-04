import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      {
        path: 'tickets',
        loadComponent: () =>
          import('./pages/tickets/tickets.component')
            .then(m => m.TicketsComponent)
      },

      {
        path: 'open-tickets',
        loadComponent: () =>
          import('./pages/open-ticketss/open-ticketss.component')
            .then(m => m.OpenTicketssComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];