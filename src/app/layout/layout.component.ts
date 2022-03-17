import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() length: number = 0;
  @Input() breadth: number = 0;
  @Input() data: any = {};

  constructor() {}

  ngOnInit(): void {}

  getArrayFromNumber(n: number) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
}
