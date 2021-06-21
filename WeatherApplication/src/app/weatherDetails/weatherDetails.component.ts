import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../_services/city.service';
import { CommunicationService } from '../_services/communication.service';
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
  test:any;
  searchQuery;
  responseData: any;

  constructor(private locationService: LocationService,
    private cityService: CityService, private communicationService: CommunicationService, private route: Router) {}

    ngOnInit() {

    this.communicationService.content.subscribe((data) => {
      this.searchQuery = data;
      this.getResponse(this.searchQuery);
      });

  }

  getResponse(value)
  {
    this.cityService.getByCity(value).subscribe(responseData =>{
      this.responseData = responseData;
      console.log(this.responseData);
      console.log("podaci");
    }, error =>{
      console.log(error);
    });
  }

}
