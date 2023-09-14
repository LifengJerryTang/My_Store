import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addToCart} from "../state/cart/cart.actions";
import {CartItem} from "../models/cart-item";
import {AppState} from "../state/app.state";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL: string = 'http://localhost:4200/assets/data.json';
  constructor(private http: HttpClient, private store: Store<AppState>) {

  }

  get products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  addToCart(product: Product, count: number): void {

    let cartItem: CartItem = {product, count};

    this.store.dispatch(addToCart({cartItem}))
  }

}
