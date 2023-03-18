import { Directive, Input } from "@angular/core";
import { UntypedFormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[customMin][ngModel]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
/**
 * Objetivo: Crear una Directiva personalizada a traves del decorador @Directive
 * Asignamos el selector o nombre de esta con [CustonMin], la cual se pasa como atributo al [ngModel].
 * Obtenemos los modulos necesarios de NG_VALIDATORS, usamos la clase actual para asignarla a ala directiva nueva
 * Class - CustonMinDirective()
 *
 * @usageNotes
 * Directiva Personalizada extiende
 * atributos de un elemento del DOM
 * para poder manejarlos.
 */

export class CustomMinDirective implements Validator{

/**
 * Obtenemos una entradaa del componente padre (input)
 * luego la establecemos como una de las propiedades
 * para poder hacer la evaluacion.
 * @Input
 */
  @Input() minimo!: number;


  constructor(){}
  /**
   * Creamos una nueva instancia del @method Validate
   * para poder usar sus propiedades, pasamos el parametro @param control
   * e indicamos que es de tipo @type FormControl
   */
  validate( control: UntypedFormControl ){
    /**
     * Asignamos el valor recibido al @param control
     */
    const inputValue = control.value

    /*inputValue:Obtiene el valor del control de el input
    *this.minimo:[minimo]="parametro"
    ***Se Pone en llaves cuadradas para angular lo controle y convierta a number;
    */

    return ( inputValue < this.minimo)?{'customMin':true}:null;
    /**
     * Retorna si es true, cuando el valor de entrada(inputValue:)
     * sea menor al minimo especificado([minimo]="parametro")
     * sino, retorna null.
     */
  }

}


