import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

//Template Form: La mayor parte de la logica que dicta el comportamiento esta indicado en el html(template).

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //Nos permite poder ver elementos(hijos) dentro del componente padre(principal(basicos.component) )
  @ViewChild('miFormulario') miFormulario!: NgForm;

  //Establecemos un valo inicial desde el [ngNodel] con []
  //[ngModel]="initForm"
  initForm = {
    producto:'Tu producto(esto no es un placeholder)',
    precio:0,
    existencias:0
  }
  constructor() { }

  ngOnInit(): void {

    /**
     * Podems
     */

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

    // console.log(this.miFormulario);
    console.log('Posteo Correcto');
    /**
     * Reinicio de formulario (reinicia el pristine por ejemplo)
     */

    // this.miFormulario.resetForm();//Reinicio

    /**
     * Reinicio asignando valores a los inputs
     */
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });


  }




}
