import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements DoCheck, OnInit{
  title = 'NGZOO';
  emailContacto: string;

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log('Metodo onDoCheck se ha Lanzado en AppComponent..!');
  }
  ngOnInit(){
    
    //console.log(this.emailContacto);
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
