import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiServiceService {

  constructor(private http: HttpClient) { };

  fetchdatafromext() {
    return this.http.get('https://fakestoreapi.com/products');
    }
  
  
}
