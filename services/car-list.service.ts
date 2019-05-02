import { Injectable } from '@angular/core';
import { Car, CARS } from '../templates/templates';

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  constructor() { }

  getCarList(): Car[] {
    return CARS;
  }

}
