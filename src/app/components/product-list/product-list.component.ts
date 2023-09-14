import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[] = []


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.products.subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    })
  }

  addSelectedProductToCart(product: Product, count: number): void {
    this.productService.addToCart(product, count);
    alert(`SUCCESS! Added ${count} ${product.name} to cart!`);
  }

}
