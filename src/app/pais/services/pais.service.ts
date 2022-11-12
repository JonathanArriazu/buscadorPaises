import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url= `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url );  //Coloco return porque yo no quiero obtener la informacion aqui, sino que quiero enviar la informacion a quien sea que mando a llamar a buscarPais. Con esto retorno un Observable, por lo tanto, especifico el tipo Observable en buscarPais()
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url= `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>( url );  //Coloco return porque yo no quiero obtener la informacion aqui, sino que quiero enviar la informacion a quien sea que mando a llamar a buscarPais. Con esto retorno un Observable, por lo tanto, especifico el tipo Observable en buscarPais()
  }

  getPaisPorAlph( id: string ): Observable<Country> {

    const url= `${this.apiUrl}/alpha/${id}`; // /alpha/ es xqe asi dice la documentacion de la API

    return this.http.get<Country>( url );  //No es array, solo devuelve 1 valor string, por eso es que a Country le quito los []
  }
}
