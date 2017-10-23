import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() nombre: string;
  @Input('mtr') metros: number;
  public vegetancion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = "Edgar";
    this.metros = 549;
    this.vegetancion = "Alta";
    this.abierto = true;
   }

   ngOnChanges(changes: SimpleChanges){
      console.log(changes)
   }

   emitirEvento(){
      this.pasameLosDatos.emit({
        'nombre' : this.nombre,
        'metros' : this.metros,
        'vegetacion' : this.vegetancion,
        'abierto' : this.abierto
      })
   }

  ngOnInit() {
    console.log('Metodo onInit Lanzado..!');
  }

  ngDoCheck(){
    console.log('Metodo onDoCheck se ha Lanzado..!');
  }

  ngOnDestroy(){
    console.log("Se ha destruido Parques..! Borrar variables globales :)");
  }

}
