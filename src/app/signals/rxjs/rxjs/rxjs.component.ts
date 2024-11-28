import { Component, OnInit } from '@angular/core';
import { concat, filter, from, fromEvent, interval, map, mapTo, merge, of, range, scan, share, startWith, Subject, switchMap, take, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // ! switchMap interrumpe los observables anteriores mientras las mapea
    // fromEvent(document, 'click').pipe(
    //   switchMap(() => interval(1000))
    // ).subscribe(
    //   (console.log)
    // )

    // ejemplo para el template
    const remainingLabel = document.getElementById('remaining');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    if (pauseButton && resumeButton && remainingLabel) {
      const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo('paused'));
      const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo('resumed'));

      const timer$ = interval(1000).pipe(
        scan((acc, curr) => (curr ? curr + acc : acc),10 ),
        takeWhile((val) => val >= 0)
      );

      const state$ = merge(
        pause$,
        resume$.pipe(startWith('resumed'))
      ).pipe(
        switchMap((state) => (state === 'paused' ? of(null) : timer$))
      );

      state$.subscribe((time) => {
        if (time !== null) {
          remainingLabel.textContent = time.toString();
        }
      });
    } else {
      console.error('One of the buttons or the label is not found in the DOM');
    }


    // ! CONCAT
    // const timer = interval(1000).pipe(
    //   take(3)
    // );
    // const rango = range(1, 10);

    // const result = concat(timer, rango);
    // result.subscribe(
    //   x => console.log(x)
    // )

    // ! SHARE para compartir observables
    // const time = timer(1000);
    // const obs = time.pipe(
    //   tap(() => console.log('Procesado'),
    //   mapTo('Completado')
    //   )
    // )

    // const subs01 = obs.subscribe({
    //   next: (n) => console.log(n)
    // })
    // const subs02 = obs.subscribe({
    //   next: (n) => console.log(n)
    // })

    // const shareObs = obs.pipe(share());
    // console.log('shareObs');
    // const subs03 = shareObs.subscribe(
    //   val => console.log(val)
    // )



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
