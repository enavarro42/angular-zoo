import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h2>{{title}}</h2>
    <input type="text" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent implements DoCheck, OnInit{
    title = 'Guardar Email';
    emailContacto: string;

    ngDoCheck(){
    
    }

    ngOnInit(){
        
    }

    guardarEmail(){
        localStorage.setItem('emailContacto', this.emailContacto);
    }
}
