import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  public counter: Date;
  private ticking: boolean;
  private tick;

  ngOnInit(): void {
    this.ticking = false;
    this.tick = timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.ticking) {
        this.counter = new Date(0, 0, 0, 0, 0, 0);
        this.counter.setSeconds(ellapsedCycles);
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.tick.unsubscribe();
  }

  start() {
    this.ticking = true;
  }

  stop() {
    this.ticking = false;
  }
}
