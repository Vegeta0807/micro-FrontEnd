import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'details', component: DetailsComponent }],
  },
];

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
