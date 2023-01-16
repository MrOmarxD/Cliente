import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interface/cartelera.response';
import { CreditsResponse } from '../interface/credits-response';
import { MovieResponse } from '../interface/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean =false;

  constructor( private http: HttpClient) { }

  get params() {
    return{
      api_key: '150a0cd5469881d47e6440a88755139c',
      language: 'es-ES',
      page:this.carteleraPage
    }
  }

  getCartelera(): Observable<Movie[]>{

    console.log("Cargando API");
    console.log(this.cargando);

    if( this.cargando ){
      //Cargando peliculas
      return of ([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map(( resp)=> resp.results),
      tap( () =>{
        console.log()
        this.carteleraPage +=1;
        this.cargando = false; //En este momento ya tengo una respuesta
      })
    );
  }

  bucarPeliculas(texto: string): Observable<Movie[]>{

    const params = {...this.params, page:'1', query: texto};

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
      params
      }).pipe(
        map(resp => resp.results)
      );
  }

  resetCarteleraPage(){
    this.carteleraPage=1;
  }

  getPeliculaDetalle(id:string){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err=>of(null))
      )
  }

  getCast(id: string){

    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map( resp=> resp.cast),
      catchError(err=>of([]))
    );

  }

}
