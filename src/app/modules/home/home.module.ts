import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
