import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    // { path: 'details/:type/:id', component: MovieDetailsComponent},
    // {path:'movies',component: MoviesComponent},
    // {path:'tv',component: ShowsComponent},
    // {path:'people',component: PeopleComponent},
    // { path: 'person/:id', component: PeopleDetailsComponent},

    {path:'**',component: HomeComponent,pathMatch:'full'}
]