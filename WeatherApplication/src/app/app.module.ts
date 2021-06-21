import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { CityService } from './_services/city.service';
import { LocationService } from './_services/location.service';
import { CommunicationService } from './_services/communication.service';
import { WeatherDetailsComponent } from './weatherDetails/weatherDetails.component';

@NgModule({
  declarations: [			
    AppComponent,
      HeaderComponent,
      HomeComponent,
      WeatherDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [
    CityService,
    LocationService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
