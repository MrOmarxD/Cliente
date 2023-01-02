import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit{

  @Input()
  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
