import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { favoriteReducer } from "./favoriteReducer";
import { filterReducer } from "./filterReducer";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    filter: filterReducer,
  },
});