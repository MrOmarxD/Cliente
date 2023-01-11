import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoAPIResponse } from 'src/app/models/infoAPI.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = "https://api.publicapis.org/entries";

  constructor(private _http:HttpClient) { }

  getEntradas():Observable<infoAPIResponse>{
    return this._http.get<infoAPIResponse>(this.url);
  }
}
