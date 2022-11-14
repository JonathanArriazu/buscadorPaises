import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  private urlRegion: string = "https://restcountries.com/v2"

  /* get httpParams () {
    return new HttpParams() //Esto es un objeto que me permite configurar los params del http
      .set("fields", "name,capital,population,flags") // Recibe el parametro y luego su valor
  } */

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> { //: observable<Country[]> --> Debo regresar un Observable que va a emitir Country como un array

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

  buscarRegion ( region: string) : Observable<Country[]> {

    

      ///?fields=name, capital, region, population`
      
      const url = `${this.urlRegion}/regionalbloc/${region}`

    return this.http.get<Country[]>( url ); //Agrego { params: params } acompañando a la url
  }
}
