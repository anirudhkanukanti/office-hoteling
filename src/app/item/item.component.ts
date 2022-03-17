import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() data: any = {};
  itemData: any;

  constructor() {}

  ngOnInit(): void {
    this.itemData = this.data['x' + this.x + 'y' + this.y];
  }

  onSelect() {
    // for not allowing user to select already booked cubicle
    if (this.itemData?.isBooked) {
      return;
    }
    // for not allowing user to select more than 1 cubicle
    if (!this.itemData.isSelected && this.data.userHasSelected) {
      return;
    }
    this.data.userHasSelected = !this.itemData?.isSelected;
    this.itemData.isSelected = !this.itemData?.isSelected;
  }
}
