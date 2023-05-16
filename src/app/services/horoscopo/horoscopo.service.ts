import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoroscopoService {
  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '03f28adf07msh5b330a481c6e825p113404jsn80b6334ddee2',
      'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
    }),
  };
  public getDayliSign = (signo: string): Observable<any> => {
    try {
      const params = new HttpParams()
        .set('s', signo.toString())
      return this._http.get(
        'https://horoscope-astrology.p.rapidapi.com/sign',
        { params, headers: this.httpOptions.headers }
      );
    } catch (error) {
      console.log('error', error);
      return this._http.get('');
    }
  };
}
