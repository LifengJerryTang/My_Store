import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {CartItem} from "../../models/cart-item";
import {updateCartItem} from "../../state/cart/cart.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.allCartItems.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      console.log(this.cartItems)
    })

  }

  ngOnDestroy() {
    console.log("Cart destroyed")
  }


  increaseCartItemAmount(item: CartItem) {

    let updatedItem = {...item, count: item.count + 1};

    this.cartService.updateCartItem(updatedItem);
  }
}
