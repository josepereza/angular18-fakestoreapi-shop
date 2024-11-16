import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public apiUrl:string='https://fakestoreapi.com/products'
  httpClient=inject(HttpClient)
  categoria=signal<string>('all')
  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }
  getProductsById(id:number){
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`)
  }
  getCategories(){
    return this.httpClient.get<string[]>(`${this.apiUrl}/categories`)
  }
  getProductsByCategory(categoria:string|null){

    if(categoria=='all'){
      return this.httpClient.get<Product[]>(`${this.apiUrl}`)

    }
    return this.httpClient.get<Product[]>(`${this.apiUrl}/category/${categoria}`)
  }
}
