import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductListService} from "../../services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[] = []


  constructor(private productListService: ProductListService) {
  }

  ngOnInit(): void {
    this.productListService.products.subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    })
  }

  addSelectedProductToCart(product: Product, count: number): void {
    alert(`SUCCESS! Added ${count} ${product.name} to cart!`);
  }

}
