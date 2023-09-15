import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {CartItem} from "../../models/cart-item";
import {selectAllCartItems} from "../../state/cart/cart.selectors";
import {Observable} from "rxjs";
import {clearCart, deleteCartItem, updateCartItem} from "../../state/cart/cart.actions";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store<AppState>) { }

  get allCartItems(): Observable<CartItem[]> {
    return this.store.pipe(select(selectAllCartItems));
  }

  updateCartItem(cartItem: CartItem) {
    this.store.dispatch(updateCartItem({cartItem}));
  }

  deleteCartItem(cartItem: CartItem) {
    this.store.dispatch(deleteCartItem({cartItem}));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
