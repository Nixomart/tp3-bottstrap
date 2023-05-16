import { Component } from '@angular/core';
import { Song } from 'src/app/models/song/song';
import { MusicService } from 'src/app/services/music/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  musics!: Array<Song>
  musica!: Song; 
  search: string = "parl jam";
  constructor(private musicService:MusicService){
    this.cargarMusicas();
  }
  cargarMusicas = () =>{
    console.log(this.search)
    this.musicService.searchMusic(this.search).subscribe(
      (result) =>{
        this.musics = new Array<Song>();
        result.data.forEach((element: any) => {
          this.musica = new Song();
          this.musica.id = element.id
          this.musica.artist = element.artist.name
          this.musica.name = element.title
          this.musica.play = element.preview
          this.musica.link = element.link
          this.musica.image = element.album.cover_big
          this.musics.push(this.musica)
          /* console.log(element) */
/*           console.log(this.musics) */
        });
      },
      error => console.log(error)
    )
  }
}
