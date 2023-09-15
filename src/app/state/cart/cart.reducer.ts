import {createReducer, on} from "@ngrx/store";
import {addToCart, clearCart, deleteCartItem, loadItemsFromCart, updateCartItem} from "./cart.actions";
import {CartItem} from "../../models/cart-item";


export interface CartState {
  cartItems: CartItem[]
}
export const initialState: CartState = {
  cartItems: []
}

export const cartReducer = createReducer(

  initialState,

  on(addToCart, (state: CartState, {cartItem}): CartState => (
    {
      cartItems: [...state.cartItems, cartItem]
    }
  )),

  on(loadItemsFromCart, (state: CartState): CartState => ({...state})),

  on(updateCartItem, (state: CartState, {cartItem}): CartState => {
    let cartItems = [...state.cartItems];
    let itemIndex = state.cartItems.findIndex((item: CartItem) =>
      item.product.id === cartItem.product.id);
    cartItems[itemIndex] = cartItem;

    return {cartItems}
  }),

  on(deleteCartItem, (state: CartState, {cartItem}): CartState => {
    let cartItems = [...state.cartItems];
    let itemIndex = state.cartItems.findIndex((item: CartItem) =>
      item.product.id === cartItem.product.id);

    cartItems.splice(itemIndex, 1);

    return {cartItems}
  }),

  on(clearCart, (state: CartState): CartState => ({cartItems: []}))

)
