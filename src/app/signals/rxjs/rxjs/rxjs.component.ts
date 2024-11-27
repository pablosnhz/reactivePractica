import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, interval, map, mapTo, of, share, Subject, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // ! SHARE para compartir observables
    const time = timer(1000);
    const obs = time.pipe(
      tap(() => console.log('Procesado'),
      mapTo('Completado')
      )
    )

    const subs01 = obs.subscribe({
      next: (n) => console.log(n)
    })
    const subs02 = obs.subscribe({
      next: (n) => console.log(n)
    })

    const shareObs = obs.pipe(share());
    console.log('shareObs');
    const subs03 = shareObs.subscribe(
      val => console.log(val)
    )



    // ! TAP espia de observable
    // const clicks = fromEvent(document, 'click');
    // const positions = clicks.pipe(
    //   tap(ev => console.log('Procesado: ' + ev),
    //     err => console.error('Error: ' + err),
    //     () => console.log('Completado')
    //   )
    // )
    // positions.subscribe({
    //   next: (n) => console.log(n)
    // })

    // ! MAP y FILTER haciendo uso de pipe y of
    // const nums = of(1, 2, 3, 4, 5).pipe(
    //   filter((n: number) => {
    //     // obteniendo pares
    //     return n % 2 === 0;
    //   }),
    //   map((n: number) => {
    //     return n * n;
    //   })
    // );

    // nums.subscribe((n: number) => {
    //   console.log(n);
    // });


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
