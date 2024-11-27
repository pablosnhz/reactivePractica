import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, interval, map, of, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // ! MAP y FILTER haciendo uso de pipe y of
    const nums = of(1, 2, 3, 4, 5).pipe(
      filter((n: number) => {
        // obteniendo pares
        return n % 2 === 0;
      }),
      map((n: number) => {
        return n * n;
      })
    );

    nums.subscribe((n: number) => {
      console.log(n);
    });


    // ! INTERVAL o Timer para emitir un valor cada cierto tiempo
    // // interval o timer
    // const contador = timer(1000);

    // contador.subscribe((n) => {
    //   console.log('Trigger');

    // })

    // ! SUBJECT
    // // subject multiples suscriptores
    // const subject = new Subject<number>();

    // // nos suscrimos al subject
    // subject.subscribe({
    //   next: (n) => console.log(`Observer A: ${n}`)
    // })
    // subject.subscribe({
    //   next: (n) => console.log(`Observer B: ${n}`)
    // })

    // // y lo mandamos junto con el next
    // subject.next(1);
    // subject.next(2);
  }

}
