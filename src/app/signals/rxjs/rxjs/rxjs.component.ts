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
    const subject = new Subject<number>();

    subject.subscribe({
      next: (n) => console.log(`Observer A: ${n}`)
    })
    subject.subscribe({
      next: (n) => console.log(`Observer B: ${n}`)
    })
    subject.next(1);
    subject.next(2);
  }

}
