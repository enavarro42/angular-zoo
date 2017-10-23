import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit{
    public titulo;
    public nombreDelParque: string;
    public miparque;

    constructor(){
        this.titulo = 'Esta es la tienda';
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event)
        this.miparque = event;
    }

    ngOnInit(){
        $('#textojq').hide();
        $('#btnjq').click(function(){
            $('#textojq').slideToggle();
        });
        $("#caja").dotdotdot();
    }

    textoEditor(event){
        console.log(event);
    }
}