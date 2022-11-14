import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  getClaseCss ( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion (region: string) {

    if (region === this.regionActiva) { return;} //Esta linea es para que no se vuelva a cargar la region activa si es que ya esta seleccionada

    this.regionActiva = region;
    this.paises = []; //Esta linea es para mejorar la velocidad de respuesta

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( (resp) =>{
        this.paises = resp;
      })

  }

}
