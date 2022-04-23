import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  //El tipo de ElementRef es porque de por si es generico, si pongo esto me va a permitir ver las propiedades del input
  @ViewChild('txtBuscar') txtBus!:ElementRef<HTMLInputElement>; //txtBus lo defino como ElementRef y el signo ! indica que le garantizo a typescritp que la propiedad va a existir
  /**
   * 
   * @param elemento Función que recibe el nombre del elemento a buscar
   */
  buscar(){

    const valor = this.txtBus.nativeElement.value
    console.log(valor)
    //lo siguiente es para que se borre luego de dar enter
    this.txtBus.nativeElement.value = ''
  }
}
