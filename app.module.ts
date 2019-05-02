import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarMapComponent } from './car-map/car-map.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CarMapComponent,
    CarListComponent,
    CarListItemComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWd46uTUhUbiHbnDYH6BY_cmQAlr1Lvls'
    }),
    AgmSnazzyInfoWindowModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
