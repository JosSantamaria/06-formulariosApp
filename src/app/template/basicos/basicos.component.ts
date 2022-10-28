import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //Nos permite poder ver elementos(hijos) dentro del componente padre(principal(basicos.component) )
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  /** Acceso a controles de formulario:
   * es necesario acceder al arreglo
   * de controls con el_nombre:string del
   * elemento a controlar o usar.
  */

  //validacion de nombre
  /**
   * Retorna  ( true | false ) pregunta con '?'
   * Si el formulario existe &
   * Si el controls['producto']? existe &
   * Si es ivalido.
   */
   nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid
      && this.miFormulario?.controls['producto']?.touched;
  }

  /**
   * Retorna  ( true | false ) pregunta con '?'
   * Si el formulario existe &
   * Si el controls['precio']? existe &
   * Si es 0 o mayor.
   */

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.touched
      && this.miFormulario?.controls['precio']?.value < 0
  }

  // guardar( miFormulario: NgForm ){
  guardar( ){
    console.log(this.miFormulario);
  }




}
