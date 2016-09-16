import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarsComponent }      from './bars.component';
import { HomeComponent }      from './home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bars',
    component: BarsComponent
  }
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);
