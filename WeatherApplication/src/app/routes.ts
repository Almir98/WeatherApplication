import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WeatherDetailsComponent } from "./weatherDetails/weatherDetails.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    { path: 'city-id/:id', component: WeatherDetailsComponent},

    {path:'**',component: HomeComponent,pathMatch:'full'}
]