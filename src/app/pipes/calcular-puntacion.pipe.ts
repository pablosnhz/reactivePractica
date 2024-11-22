import { Pipe, PipeTransform } from '@angular/core';
import { Ijugador } from '../models/jugador.interface';

@Pipe({
  name: 'calcularPuntacion'
})
export class CalcularPuntacionPipe implements PipeTransform {

  transform(jugador: Ijugador, ...args: unknown[]): string {

    let puntuacionTotal: number = 0

    jugador.puntos.forEach((puntuacion)=> {
      puntuacionTotal += puntuacion ++;
    })

    return `${jugador.nombre} ha conseguido ${puntuacionTotal} puntos en total`;
  }

}
