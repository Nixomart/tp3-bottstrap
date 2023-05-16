import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: {
      'X-RapidAPI-Key': 'd342c26919mshaa4912849550bdep17dadfjsn8b224ffc46b2',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };
  public searchMusic = (seach: string): Observable<any> => {
    try {
      const params = new HttpParams().set('q', seach.toString());
      return this._http.get(
        'https://deezerdevs-deezer.p.rapidapi.com/search',
        { params, headers: this.httpOptions.headers }
      );
    } catch (error) {
      console.log('ERROR', error);
      return this._http.get('asdad');
    }
  };
}
