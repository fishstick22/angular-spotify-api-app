import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { Artist }         from '../../models/Artist';

@Component({
    selector:    'search',
    templateUrl: 'search.component.html',
    styleUrls:  ['search.component.css']
})
export class SearchComponent {
    searchStr: string;
    searchRes: Artist[];
    
    constructor( private _spotifyService: SpotifyService ) {
        
    }
    
    searchMusic() {
        //console.log(this.searchStr);
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
           // console.log(res.artists.items);
           this.searchRes = res.artists.items;
        });
    }
}
