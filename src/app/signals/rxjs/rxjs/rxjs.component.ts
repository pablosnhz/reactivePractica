import { Component, OnInit } from '@angular/core';
import { concat, concatMap, delay, filter, forkJoin, from, fromEvent, interval, map, mapTo, merge, of, range, scan, share, startWith, Subject, switchMap, take, takeWhile, tap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // ! concatMap fuerza la ejecucion de un array con su orden [1,3,2] en ese orden
    // los of 2000, 1000, 3000 son los segundos que tardaria en aparecer en pantalla por consola
    // pero llegan primero el 2000, 1000, 3000 en ese orden
    const source = of(2000, 1000, 3000);

    const obsConcatMap = source.pipe(
      // si cambiamos de concat map a merge en vez de devolver 2000,1000,3000 devuelve en orden 1000,2000,3000
      concatMap(val => of(`Valor: ${val}`).pipe(delay(val)))
    );

    obsConcatMap.subscribe(
      val => console.log(val)
    )

    // ! forkJoin combinacion de observables
    // const fork = forkJoin(
    //   of('hola'),
    //   of('mundo').pipe(delay(1000)),
    //   interval(1000).pipe(take(2))
    // )
    // fork.subscribe(
    //   val => console.log(val)
    // )

    // otro ejemplo real
    // const src = forkJoin({
    //   google: this.http.get('https://api.example.com/google'),
    //   bing: this.http.get('https://api.example.com/bing')
    // });

    // src.subscribe((results) => {
    //   console.log('Google data:', results.google);
    //   console.log('Bing data:', results.bing);
    // });


    // ! switchMap interrumpe los observables anteriores mientras las mapea
    // fromEvent(document, 'click').pipe(
    //   switchMap(() => interval(1000))
    // ).subscribe(
    //   (console.log)
    // )

    // ejemplo para el template
    // const remainingLabel = document.getElementById('remaining');
    // const pauseButton = document.getElementById('pause');
    // const resumeButton = document.getElementById('resume');

    // if (pauseButton && resumeButton && remainingLabel) {
    //   const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo('paused'));
    //   const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo('resumed'));

    //   const timer$ = interval(1000).pipe(
    //     scan((acc, curr) => (curr ? curr + acc : acc),10 ),
    //     takeWhile((val) => val >= 0)
    //   );

    //   const state$ = merge(
    //     pause$,
    //     resume$.pipe(startWith('resumed'))
    //   ).pipe(
    //     switchMap((state) => (state === 'paused' ? of(null) : timer$))
    //   );

    //   state$.subscribe((time) => {
    //     if (time !== null) {
    //       remainingLabel.textContent = time.toString();
    //     }
    //   });
    // } else {
    //   console.error('One of the buttons or the label is not found in the DOM');
    // }


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
