import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.loadProducts();
  }
  productService=inject(ProductsService)
  products:Product[]=[]

  loadProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
    })
  }
}
