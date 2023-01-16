import { Component, Input, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from 'src/app/interface/cartelera.response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit{

  @Input() movies: Movie[] = [];
  public mySwiper!: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }
   
  ngOnInit(): void {
    console.log(this.movies);
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrevious(){
    this.mySwiper.slidePrev();
  }

  ngAfterContentInit(): void {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    
  }
  
  
}

