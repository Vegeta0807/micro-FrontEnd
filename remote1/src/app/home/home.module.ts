import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
