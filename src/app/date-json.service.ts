import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DateJsonService {
  url = environment.url;
  key = '';
  constructor(private http: HttpClient) { }

  setKey(key: string) {
    this.key = key;
  }
  
  getData(){
    return this.http.get(this.url + '/' + this.key);
  }
}
