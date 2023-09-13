import {createAction, props} from "@ngrx/store";
import {CartItem} from "../../models/cart-item";

export const addToCart = createAction(
  "[Product List Component] Add Item To Cart",
  props<{cartItem: CartItem}>()
)

export const loadItemsFromCart =
  createAction("[Cart Component] Load Items from Cart");

