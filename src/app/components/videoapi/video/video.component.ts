import { Component } from '@angular/core';
import { Video } from 'src/app/models/video/video';
import { YoutubeService } from 'src/app/services/youtube/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  video!:Video;
  videos!: Array<Video>;
  search: string = 'paisajes hd';
  selectedVideoo: Video = new Video();

  constructor(private videoService: YoutubeService){
    this.findVideo();
  }
  selectVideo(video: Video) {
    this.selectedVideoo = video;
    console.log(this.selectedVideoo)
  }

  findVideo = () =>{
    this.videoService.searchVideo(this.search).subscribe(
      (result)=>{
        this.videos = new Array<Video>()
        result.results.forEach((result: any) => {
          this.video = new Video();
          this.video.id = result.id;
          this.video.link = result.url 
          this.video.channel = result.channel.name
          this.video.title = result.title
          this.video.image = result.channel.icon
          console.log(result);
          
          this.videos.push(this.video);
        });
      }
    )
  }
}
