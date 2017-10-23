import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
   {{title}}
    <mostrar-email></mostrar-email>
    <guardar-email></guardar-email>
  `
})
export class MainEmailComponent implements  OnInit{
  title = 'modulos de Email';

  ngOnInit(){
    console.log("Componente Main Email Cargado.");
  }

}
