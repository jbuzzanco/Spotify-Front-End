import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';

import { SearchService } from '../search/search.service';
import { Artist } from '../artist/artist';
import { Album } from '../album/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {

    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.searchService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
