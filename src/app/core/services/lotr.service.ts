import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotrService {

  accesToken = 'J3gfhTd7sBv5eiL7PDAQ'
  baseUrl = 'https://the-one-api.dev/v2'

  constructor(private http: HttpClient) { }


  getCharacter(id: string) {
    const headers = {
      'Authorization': `Bearer ${this.accesToken}`
    }
    const requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.get(this.baseUrl + '/character/' + id, requestOptions)
  }
}
