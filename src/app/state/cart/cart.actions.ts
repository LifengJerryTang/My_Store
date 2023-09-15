import {createAction, props} from "@ngrx/store";
import {CartItem} from "../../models/cart-item";

export const addToCart = createAction(
  "[Product List Component] Add Item To Cart",
  props<{cartItem: CartItem}>()
)

export const loadItemsFromCart =
  createAction("[Cart Component] Load Items from Cart");

export const updateCartItem = createAction(
  "[Cart Component] Update Item in Cart",
  props<{cartItem: CartItem}>()
)

export const clearCart = createAction(
  "[Cart Component] Clearing Cart"
)

