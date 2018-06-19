import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataGetterService {

  constructor(private http:Http) { }
  
public getData(): Observable<any> {
  return this.http.get('../assets/deliveries-sample.json')
    .map(res => {
    return res.json();
  })
}
}
