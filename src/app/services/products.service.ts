import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public apiUrl:string='https://fakestoreapi.com/products'
  httpClient=inject(HttpClient)
  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }
}
