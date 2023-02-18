import { product } from './../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  domain: string = 'https://fakestoreapi.com';
  products: string = 'products';
  categories: string = 'categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(
      `${this.domain}/${this.products}/${this.categories}`
    );
  }
  getProducts(): Observable<product[]> {
    return this.httpClient.get<product[]>(`${this.domain}/${this.products}`);
  }
}
