import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit{

  public texto: string = '';
  public movies: Movie[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService) { }
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params =>{

      this.texto = params['texto'];

      this.peliculasService.buscarPeliculas(params['texto']).subscribe(
        movies =>{
          console.log(movies);
          this.movies = movies;
        }
      )
    });
  }
}
