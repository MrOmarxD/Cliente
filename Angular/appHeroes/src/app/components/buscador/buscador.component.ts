import { Component, OnInit } from '@angular/core';
// Para capturar el parámetro que viene por url
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{

  heroes: any[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute){ }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params[this.termino]);
    });
  }

}
