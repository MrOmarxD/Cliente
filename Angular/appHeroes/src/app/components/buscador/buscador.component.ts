import { Component, OnInit } from '@angular/core';
// Para capturar el parámetro que viene por url
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{

  heroes: any[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService){ }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      this.termino = params['termino'];
      console.log(params[this.termino]);
    });
  }

}
