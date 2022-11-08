import { Component,  } from '@angular/core';

interface MenuItem //se crea para el mejos manejo de (objeto) rutas.
{
 texto:string,
 ruta:string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }

    `
  ]
})
export class SidemenuComponent{

//Creamos el arreglo para recorrer con *ngFor y mostrar las rutas.
templateMenu: MenuItem[] = [
  {
    texto:'Básicos',
    ruta:'./template/basicos'
  },
  {
    texto:'Dinámicos',
    ruta:'./template/dinamicos'
  },
  {
    texto:'Switches',
    ruta:'./template/switches'
  }
]

reactiveMenu: MenuItem[] = [
  {
    texto:'Básicos',
    ruta:'./reactive/basicos'
  },
  {
    texto:'Dinámicos',
    ruta:'./reactive/dinamicos'
  },
  {
    texto:'Switches',
    ruta:'./reactive/switches'
  }
]

}
