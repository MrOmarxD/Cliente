import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interface/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss']
})
export class CastSlideshowComponent implements OnInit, AfterContentInit{

  @Input() cast: Cast [] =[];

  constructor () { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  ngAfterContentInit(): void {
    const swiper= new Swiper('.swiper-container',{
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
