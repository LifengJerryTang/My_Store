import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {CartState} from "./cart.reducer";

export const selectCartItems = (state: AppState) => state.cart;

export const selectAllCartItems = createSelector(
  selectCartItems,
  (state: CartState) => state.cartItems
)
