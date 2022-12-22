import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appPeliculas';

  constructor( private peliculasService: PeliculasService){
  this.peliculasService.getCartelera()
    .subscribe(resp=>{
      console.log(resp);
      resp.results[0].adult;
    })
  }
}

