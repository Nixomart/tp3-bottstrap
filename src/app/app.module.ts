import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HoroscopoComponent } from './components/home/horoscopo/horoscopo.component';
import { MusicComponent } from './components/home/music/music.component';
import { DivisasComponent } from './components/home/divisas/divisas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HoroscopoComponent,
    MusicComponent,
    DivisasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
