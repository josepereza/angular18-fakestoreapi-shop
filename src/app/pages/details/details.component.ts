import { Component, computed, inject, Injector, input, OnInit, Signal } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { createComputed } from '@angular/core/primitives/signals';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  id=input.required<number>()
  miProducto!:Product
  productService=inject(ProductsService)
    miProducto2!:Signal<Product | undefined> 
    injector=inject(Injector)   
  ngOnInit(): void {
  this.miProducto2! = toSignal(this.productService.getProductsById(this.id()),{injector: this.injector});

    this.productService.getProductsById(this.id()).subscribe(producto=>{
      console.log(producto)
      this.miProducto=producto
    })
      
    
    
  }
}
