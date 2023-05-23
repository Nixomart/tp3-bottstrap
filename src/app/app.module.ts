import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HoroscopoComponent } from './components/home/horoscopo/horoscopo.component';
import { MusicComponent } from './components/home/music/music.component';
import { DivisasComponent } from './components/home/divisas/divisas.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,   } from '@angular/forms';
import { VideoComponent } from './components/videoapi/video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HoroscopoComponent,
    MusicComponent,
    DivisasComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
