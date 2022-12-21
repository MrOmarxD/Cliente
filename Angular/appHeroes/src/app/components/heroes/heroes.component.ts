import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit{

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private _router: Router){}

  //Esta funcion se ejecutara cuando este toda la pagina cargada
  ngOnInit(){
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe',idx]);
  }
}
