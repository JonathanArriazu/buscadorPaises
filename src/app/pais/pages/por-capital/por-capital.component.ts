import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent  {
  public get paisService(): PaisService {
    return this._paisService;
  }
  public set paisService(value: PaisService) {
    this._paisService = value;
  }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private _paisService: PaisService ) {}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe ( (resp) => {  //Uso aqui el .subscribe porque es aqui donde uso la data que llega
        console.log(resp);
        console.log(resp)
        this.paises = resp;
        
      }, (err) => {
        this.hayError = true;
        this.paises = []; //Si da un error, entonces devolvemos un arreglo vacio y no cargamos nada en paises.
      })
  }

  /* sugerencias( termino: string ) {   //Saco sugerencias porque no las voy a manejar aqui
    this.hayError = false;
    //AHORA HAY QUE CREAR LAS SUGERENCIAS
  } */

}
