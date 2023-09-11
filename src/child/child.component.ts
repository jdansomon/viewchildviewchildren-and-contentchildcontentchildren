import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
})
export class ChildComponent {
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
