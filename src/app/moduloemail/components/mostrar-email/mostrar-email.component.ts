import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
    <h2>{{title}}</h2>
    <span *ngIf="emailContacto">
        <strong>Email de contacto:</strong> {{emailContacto}}
        <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </span>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit{
  title = 'Mostrar Email';
  emailContacto: string;

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log('Metodo onDoCheck se ha Lanzado en AppComponent..!');
  }
  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(this.emailContacto);
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}
