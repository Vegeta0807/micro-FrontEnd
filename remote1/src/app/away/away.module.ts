import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwayComponent } from './away.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAwayComponent } from './details-away/details-away.component';

const routes: Routes = [
  {
    path: '',
    component: AwayComponent,
  },
];

@NgModule({
  declarations: [AwayComponent, DetailsAwayComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AwayModule { }
