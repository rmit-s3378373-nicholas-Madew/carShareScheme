import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { DefaultMapLocation, Location } from '../templates/templates';

@Injectable({
  providedIn: 'root'
})
export class UserlocationService {

  userlocation = DefaultMapLocation;
  subject = new Subject<Position>();
  obsPosition = Observable.create( (observer: Observer<Position>) => {
    //if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position: Position) => {
        console.log('getCurrentPosition()');
        observer.next(position) ;
        observer.complete();
        });
    //}
  });

  constructor() {
    this.obsPosition.subscribe(this.subject);
   }


  getUserLocation(): Location {
    return this.userlocation;
  }


  requestUserLocation(): Subject<Position> {
    return this.subject;

  }




}
