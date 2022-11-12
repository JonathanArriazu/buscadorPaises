import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //Se emite cuando la persona DEJA de escribir

  @Input() placeholder: string = "";
  
  debouncer: Subject<string> = new Subject();

  termino: string = "";

  constructor() { }
  
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit(valor); //En lugar de valor tambien pude haber utilizado termino
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    
    this.debouncer.next(this.termino);
  }

}
