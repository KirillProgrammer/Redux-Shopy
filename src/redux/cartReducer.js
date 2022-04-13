import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsCart: [],
  },
  reducers: {
    setCart: (state, { payload }) => {
      state.itemsCart.push(payload);
    },
    removeCart: (state, { payload }) => {
      state.itemsCart = state.itemsCart.filter((car) => car.id !== payload.id);
    },
  }
});

export const { setCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;