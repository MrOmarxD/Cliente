import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { CarteleraResponse } from '../interface/cartelera.response';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient) { }

  get params(){
    return{
      api_key: '4bcc964fbbd5a2207f3e3b6306efac67',
      language: 'es-Es',
      page: this.carteleraPage
    }
  }

  getCartelera():Observable<CarteleraResponse>{

    console.log("Cargando API");
    console.log(this.cargando);

    if(this.cargando){
      // Cargando peliculas
      return of([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map(( resp)=>resp.results),
      tap( () =>{
        this.carteleraPage +=1;
        this.cargando = false; // En este momento ya tengo una respuesta
      })
    );

  }
}
