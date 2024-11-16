import {
  Component,
  inject,
  Injector,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, NgFor, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  productService = inject(ProductsService);
  products: Product[] = [];
  categorias!: Signal<string[] | undefined>;
  injector = inject(Injector);
  categoria = new FormControl('all');
  ngOnInit(): void {
    this.categoria.valueChanges.subscribe(data=>{
      this.loadProducts()
    })
    this.categorias = toSignal(this.productService.getCategories(), {
      injector: this.injector,
    });

    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProductsByCategory(this.categoria.value).subscribe((data) => {
      this.products = data;
    });
  }
  filtered($event:any){
    console.log($event.value)

  }
}
