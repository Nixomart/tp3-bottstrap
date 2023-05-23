import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisasService {
  constructor(private _http: HttpClient) {
  }

  public convertDivisas(
    fromValue: number,
    fromType: string,
    toType: string
  ): Observable<any> {
    try {
      console.log('GENERADO');
      let httpOptions = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'd342c26919mshaa4912849550bdep17dadfjsn8b224ffc46b2',
          'X-RapidAPI-Host':
            'community-neutrino-currency-conversion.p.rapidapi.com',
        },
      };
      const httpParams = new HttpParams()
        .set('from-value', fromValue.toString())
        .set('from-type', fromType)
        .set('to-type', toType);

      return this._http.post(
        'https://community-neutrino-currency-conversion.p.rapidapi.com/convert',
        httpParams.toString(),
        httpOptions
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
}
