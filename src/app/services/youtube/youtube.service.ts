import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private _htpp: HttpClient) {}

  public searchVideo = (search: string): Observable<any> => {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '03f28adf07msh5b330a481c6e825p113404jsn80b6334ddee2',
          'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        }),
      };
      const params = new HttpParams()
        .set('query', search.toString())
        .set('safesearch', 'false');

      return this._htpp.get('https://simple-youtube-search.p.rapidapi.com/search', {params, headers: httpOptions.headers});
    } catch (error) {
      console.log(error);
      return this._htpp.get('')
    }
  };
}
