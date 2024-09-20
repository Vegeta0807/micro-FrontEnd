import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwayModule } from '../../../../../remote1/src/app/away/away.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfe1/details',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('remoteapp2/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'away',
    loadChildren: () =>
      import('remoteapp1/awayModule').then((module) => module.AwayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
