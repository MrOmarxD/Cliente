import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interface/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit{

  @Input() cast: Cast[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container',{
    slidesPerView: 5.3,
    freeMode: true,
    spaceBetween: 15
  })
  }
}
