import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './components/home/horoscopo/horoscopo.component';
import { DivisasComponent } from './components/home/divisas/divisas.component';
import { MusicComponent } from './components/home/music/music.component';

const routes: Routes = [
  {path: 'horoscopo', component: HoroscopoComponent},
  {path: 'divisas', component: DivisasComponent},
  {path: 'music', component: MusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
