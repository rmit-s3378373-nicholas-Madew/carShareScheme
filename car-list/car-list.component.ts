import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CARS, Car, Location } from '../templates/templates';
import { UserlocationService } from '../services/user-location.service';
import { CarListService } from '../services/car-list.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {


  userlocation: Location;
  carlist: Car[];

  constructor(private userlocationservice: UserlocationService,
              private carlistservice: CarListService) { }

  ngOnInit() {
    console.log('carlist ngOnInit()');
    this.userlocationservice.requestUserLocation().subscribe( position => {
      console.log('carlist.subscribe');
      this.userlocation = { latitude: +position.coords.latitude, longitude: +position.coords.longitude };
      this.carlist = this.getOrderedList();
    });
    this.carlist = this.carlistservice.getCarList();
  }

  calculateDist( carLocation: Location ): number {
    const latDist = this.userlocation.latitude - carLocation.latitude;
    const lngDist = this.userlocation.longitude - carLocation.longitude;
    return Math.sqrt(Math.pow(latDist, 2 ) + Math.pow(lngDist, 2 ));

  }

  getOrderedList(): Car[] {

    console.log('getOrderedList');

    const orderedCarList = this.carlistservice.getCarList();
    let iteratorOuter = 0;
    while (iteratorOuter < orderedCarList.length - 1) {

      let iteratorInner = 0;
      let dist1: number;
      let dist2: number;

      while (iteratorInner < orderedCarList.length - 1) {

        dist1 = this.calculateDist(orderedCarList[iteratorInner].location);
        dist2 = this.calculateDist(orderedCarList[iteratorInner + 1].location);

        if (dist1 > dist2) {
           this.swap(orderedCarList, iteratorInner, iteratorInner + 1);
        }
        iteratorInner++;
      }

      iteratorOuter++;
    }

    // this.printArray(orderedCarList);
    return orderedCarList;
  }
  swap(list: Car[], pos1: number, pos2: number ) {
    const car = list[pos1];
    list.splice(pos1, 1, list[pos2]);
    list.splice(pos2, 1, car);
  }
  printArray(list: Car[]) {
    console.log('printArray()');
    for (const car of list) {
      console.log(car.name);
    }
  }
  printCarDist(list: Car[]) {
    for (const car of list) {
      console.log(car.name);
      console.log('   dist: ' + this.calculateDist(car.location));
      console.log('   lat:' + car.location.latitude);
      console.log('   lng:' + car.location.longitude);
    }
  }

}
