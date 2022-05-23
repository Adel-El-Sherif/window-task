import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, SwiperOptions, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

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
    autoplay: {
      delay: 4000,
    },
  };

  thumbsSwiperConfig: SwiperOptions = {
    direction:"vertical",
    spaceBetween: 32,
    slidesPerView: 4.1,
    freeMode: true,
    watchSlidesProgress: true
  };

  slides: any[] = [
    {
      imgPath: 'assets/media/home/hero-section/img3.jpg',
      thumbPath: 'assets/media/home/hero-section/img3.jpg',
      title: 'Army of the Dead'
    },
    {
      videoPath: 'assets/media/videos/pexels-pat-whelen-5658049.mp4',
      thumbPath: 'assets/media/home/hero-section/img6.png',
      title: 'Ghost Whisperer'
    },
    {
      imgPath: 'assets/media/home/hero-section/img5.jpg',
      thumbPath: 'assets/media/home/hero-section/img5.jpg',
      title: 'Army of the Dead'
    },
    {
      videoPath: 'assets/media/videos/pexels-pat-whelen-5658049.mp4',
      thumbPath: 'assets/media/home/hero-section/img6.png',
      title: 'Ghost Whisperer'
    },
    {
      imgPath: 'assets/media/home/hero-section/img4.jpg',
      thumbPath: 'assets/media/home/hero-section/img4.jpg',
      title: 'Army of the Dead'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
  }

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }

  onSlideChange(): void {
  }

}
