import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  cont = signal<number>(0);

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.cont.set(5);
    // }, 2000);
  }

  onClick(){
    this.cont.update((cont: number) => {
      return cont + 1;
    })
  }
}
