import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-weatherDetails',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  dateTime = Date.now();
  cordinatesLng: any;
  cordinatesLat: any;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getCordinates();
  }

  getCordinates()
  {
    this.locationService.getPosition().then(pos=>
      {
        this.cordinatesLng = pos.lng;
        this.cordinatesLat = pos.lat;
      });
  }

}
