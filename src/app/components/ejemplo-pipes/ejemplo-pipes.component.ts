import { Component } from '@angular/core';
import { Ijugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent {

  dob: Date = new Date(1997, 2, 1)
  cambio: boolean = true;
  nombre: string = 'Mark';

  numero_PI: number = 3.1415926535897;
  precioCarrito: number = 100;

  persona: Ijugador = {
    id: 0,
    nombre: 'Morty',
    apellidos: 'Rodriguez',
    edad: 30,
    email: 'morty@ima.com',
    puntos: [30]
  }

  cantidad: number = 0.35;
  textoLargo: string = 'sadassssasdass   dasdasdas  dasdasdasd d asdsa dasdasdsad';

  // ejemplo para pipe, calcular puntacion
  jugador1: Ijugador = {
    nombre: 'Asteriko',
    puntos: [10, 30, 40, 0],
  }

  jugador2: Ijugador = {
    nombre: 'Pepe',
    puntos: [0, 80, 10, 0]
  }

get dateFormat(){
  return this.cambio ? 'shortDate' : 'fullDate'
}

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}










