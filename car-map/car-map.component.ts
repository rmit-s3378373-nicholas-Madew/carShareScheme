import { Component, OnInit } from '@angular/core';
import { AgmMarker } from '@agm/core';

import { DefaultMapLocation, Car, Location } from '../templates/templates';
import { UserlocationService } from '../services/user-location.service';
import { CarListService } from '../services/car-list.service';


@Component({
  selector: 'app-car-map',
  templateUrl: './car-map.component.html',
  styleUrls: ['./car-map.component.scss']
})
export class CarMapComponent implements OnInit {



  usericon = {
    url: 'assets/icon/usericon.svg',
    scaledSize: {
      width: 30,
      height: 30
    }
  };
  caricon = {
    url: 'assets/icon/CarMarker.png',
    scaledSize: {
      width: 30,
      height: 50
    }
  };


  userlocation: Location;
  maplocation: Location;
  carlist: Car[];

  constructor(private userlocationservice: UserlocationService,
              private carlistservice: CarListService) {

  }

  ngOnInit() {
    console.log('map ngOnInit()');
    this.maplocation = DefaultMapLocation;
    this.getUserLocation();
    this.carlist = this.getCarList();
  }

  getUserLocation() {
    this.userlocationservice.requestUserLocation().subscribe( position => {
      console.log('map.subscribe');
      this.userlocation = { latitude: +position.coords.latitude, longitude: +position.coords.longitude };
      this.maplocation = this.userlocation;
    });
  }

  getCarList(): Car[] {
    return this.carlistservice.getCarList();
  }

  showInfo(e: AgmMarker) {
    console.log(e.label);
  }

  book(e) {
    console.log(e.target.dataset.id);
  }
}
