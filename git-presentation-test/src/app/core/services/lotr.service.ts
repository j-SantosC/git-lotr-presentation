import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotrService {

  accesToken = 'J3gfhTd7sBv5eiL7PDAQ'
  baseUrl = 'https://the-one-api.dev/v2'



  constructor(private http: HttpClient) { }


  getCharacters() {
    const headers = {
      'Authorization': `Bearer ${this.accesToken}`
    }
    const requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.get(this.baseUrl + '/character/5cd99d4bde30eff6ebccfd23', requestOptions)
  }
}
