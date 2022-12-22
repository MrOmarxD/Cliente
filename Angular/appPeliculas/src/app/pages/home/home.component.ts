import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public movies: Movie[] = [];

  constructor(private peliculasService: PeliculasService){

  }

  ngOnInit(): void {
    
    // getCartelera
    this.peliculasService.getCartelera()
    .subscribe(resp=>{
      console.log(resp);
      this.movies = resp.results;
    })
  }
}