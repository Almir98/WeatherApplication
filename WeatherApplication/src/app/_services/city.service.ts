import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CityService {

constructor(private http: HttpClient) { }

getByCity(cityName: string)
{
    return this.http.get(`${environment.APIUrl}/?q=${cityName}&appid=${environment.APIkey}&units=metric`);
}



}
