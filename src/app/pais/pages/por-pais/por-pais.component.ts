import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) {}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe ( (resp) => {  //Uso aqui el .subscribe porque es aqui donde uso la data que llega
        console.log(resp);
        this.paises = resp;
        
      }, (err) => {
        this.hayError = true;
        this.paises = []; //Si da un error, entonces devolvemos un arreglo vacio y no cargamos nada en paises.
      })
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    //AHORA HAY QUE CREAR LAS SUGERENCIAS
  }

}
