import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartReducer";
import { favoriteSlice } from "./favoriteReducer";
import { filterSlice } from "./filterReducer";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
    filter: filterSlice,
  }
});