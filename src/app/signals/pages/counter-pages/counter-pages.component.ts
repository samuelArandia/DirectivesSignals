import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-pages.component.html',
  styleUrls: ['./counter-pages.component.css']
})
export class CounterPagesComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter());

  increaseBy(value: number): void {
    // this.counter.set(this.counter() + value);

    this.counter.update(currentValue => currentValue + value);
  }

  constructor() {
  }

}
