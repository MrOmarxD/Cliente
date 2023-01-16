import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from 'src/app/interface/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interface/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit{

  public pelicula: MovieResponse | undefined | null;
  public cast: Cast[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasService,
                private location: Location,
                private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    console.log(id);

    this.peliculasService.getPeliculaDetalle(id)
    .subscribe(movie =>{
      console.log(movie);
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula=movie;

    });

    this.peliculasService.getCast(id)
    .subscribe( cast =>{
      console.log(cast);
      this.cast=cast;
    })
  }

  onRegresar(){
    this.location.back();
  }

}
