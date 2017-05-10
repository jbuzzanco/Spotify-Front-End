import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule {

}
