import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;

  thumbsSwiper: any;
  swiperConfig: SwiperOptions = {
    navigation: { nextEl: '.carousel-next', prevEl: '.carousel-previous' },
  };

  thumbsSwiperConfig: SwiperOptions = {
    direction:"vertical",
    spaceBetween: 32,
    slidesPerView: 3.1,
    freeMode: true,
    watchSlidesProgress: true
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }

}
