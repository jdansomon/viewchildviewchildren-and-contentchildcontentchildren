import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2>{{title}}</h1>
    <p> current count is {{child.count}} </p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">decrement</button>
    <app-child></app-child>
  `,
})
export class App {
  name = 'Angular';
  title = 'Parent calls an @ViewChild()';

  @ViewChild(ChildComponent, { static: true }) child!: ChildComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}

bootstrapApplication(App);
