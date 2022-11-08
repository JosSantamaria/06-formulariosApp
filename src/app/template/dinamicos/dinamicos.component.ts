import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorito{
  id:number;
  nombre:string;
  
}

interface Persona{
  nombre:string,
  favoritos:Favorito[]
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego:string = ''

  persona:Persona = {
    nombre:'Joset',
    favoritos:[
      {id:1, nombre:'Metal Gear Solid V5'},
      {id:2, nombre:'Gears of War 3'}

    ]
  }

  //para validacion de formulario
  nombreValido():boolean{
    return this.miFormulario?.controls['nombre']?.invalid
      && this.miFormulario?.controls['nombre']?.touched;
  }

  agregarJuego(){
    const nuevoFavorito:Favorito = 
    { 
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';
  }
  
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  
  guardar(){
    console.log("Formulario Posteado");
  }

}
