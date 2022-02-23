import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  public prodUrl = 'http://localhost:3000/products'
  public pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient)
  {

  }

  getPokemon(): Observable<any> {
    return this.http.get(this.pokeApiUrl, { params: { limit: 1000}})
  }
  getPokemonName(name: string) {
    return this.http.get(`${this.pokeApiUrl}/${name}`)

  }
  getpostAnything(): Observable<any>{
    return this.http.get(this.prodUrl)
  }
  postProd(data: any) {
    return this.http.post(this.prodUrl, data)
  }
  editProd(spec: any): Observable<any>{
    return this.http.put(`${this.prodUrl}/${spec.id}`,spec)
  }
  deleteProd(rem: any): Observable<any>{

    return this.http.delete(`${this.prodUrl}/${rem.id}`)
  }
}
