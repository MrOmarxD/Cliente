import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interface/cartelera.response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient) { }

  get params(){
    return{
      api_key: '4bcc964fbbd5a2207f3e3b6306efac67',
      language: 'es-Es',
      page:1
    }
  }

  getCartelera():Observable<CarteleraResponse>{

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=4bcc964fbbd5a2207f3e3b6306efac67&language=en-US&page=1`);

  }
}
