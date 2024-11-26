import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // subject multiples suscriptores
    const subject = new Subject<number>();

    // nos suscrimos al subject
    subject.subscribe({
      next: (n) => console.log(`Observer A: ${n}`)
    })
    subject.subscribe({
      next: (n) => console.log(`Observer B: ${n}`)
    })

    // y lo mandamos junto con el next
    subject.next(1);
    subject.next(2);
  }

}
