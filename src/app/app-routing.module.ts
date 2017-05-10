import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artist/:id', component: ArtistComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule {

}
