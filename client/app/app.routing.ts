import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarsComponent }      from './bars.component';
import { BarDetailComponent }      from './bar-detail.component';
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
  ,
  {
    path: 'bar-detail/:name',
    component: BarDetailComponent
  }
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);
