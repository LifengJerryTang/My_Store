import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{

  currentProduct: Product | undefined;
  selectedCount: number = 1;

  constructor( private route: ActivatedRoute, private auth: AuthService,
               private productService: ProductService) {
  }
  ngOnInit(): void {

    const productId = this.route.snapshot.paramMap.get('id') as string;

    this.productService.products.subscribe((products: Product[]) => {
      this.currentProduct = products.filter((product) => product.id === +productId)[0];
    })

  }

  addProductToCart(): void {

    this.productService.addToCart(this.currentProduct!, this.selectedCount);
    alert(`SUCCESS! Added ${this.selectedCount} ${this.currentProduct!.name} to cart!`);

  }
}
