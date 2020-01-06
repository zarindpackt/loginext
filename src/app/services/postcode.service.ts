import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postcode } from '../models/postcode';

@Injectable({
  providedIn: 'root'
})
export class PostcodeService {

  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<Postcode[]>('https://postcode');
  }
}
