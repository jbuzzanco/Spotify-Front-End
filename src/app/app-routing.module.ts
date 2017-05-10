import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'artist/:id', component: ArtistComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule {

}
