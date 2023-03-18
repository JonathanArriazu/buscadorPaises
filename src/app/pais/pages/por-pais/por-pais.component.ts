import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`

      li {
        cursor: pointer;
      }

  `]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) {}

  buscar( termino: string) {
    this.mostrarSugerencias = false;
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
    this.termino = termino;
    this.mostrarSugerencias = true;

    //Sugerencias:

    this.paisService.buscarPais( termino )
      .subscribe( paises => 
        this.paisesSugeridos = paises.splice(0, 5), //splice xqe solo quiero mostrar los primeros 5 resultados
        (err) => this.paisesSugeridos= [] //Para que si escribo algo que no existe, no me muestre nada (cargando el array de paisesSugeridos como array vacio)
      )
  }

  buscarSugerido( termino: string ) {
      this.buscar(termino);
      
  }

}
