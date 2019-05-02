import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../templates/templates';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
