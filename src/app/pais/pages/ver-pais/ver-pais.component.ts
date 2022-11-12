import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  /* pais!: Country[]; // al no estar inicializado pais, TS lo detecta como null o undefined, es por eso que le decimos "confia en mi, esto esta bien hecho" con un !: */
  pais: any; //Uso esto solo xqe cambio el API y ya no anda de la forma anterior

  constructor( 
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) { }

  ngOnInit(): void {

    /* this.activatedRoute.params
      .subscribe( ({id}) => {
        
        this.PaisService.getPaisPorAlph( id )
          .subscribe( pais => {
            console.log(pais);
          } )

      } ) */

      //PARA ACORTAR EL CODIGO usamos 2 operadores de rxjs: switchMap (permite recibir un observable y regresar un observable) y tap (operador que dispara un efecto secundario)

      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.PaisService.getPaisPorAlph(id)),
          tap( console.log ) // El tap recibe el producto del observable de la linea de arriba e imprime en consola lo que responda.
        )
        .subscribe ( (pais: any) => {
          this.pais = pais[0];
        })

  }

}
