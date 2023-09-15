import {createReducer, on} from "@ngrx/store";
import {addToCart, loadItemsFromCart, updateCartItem} from "./cart.actions";
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
    console.log(cartItem)
    cartItems[itemIndex] = cartItem;

    return {cartItems}
  })

)
