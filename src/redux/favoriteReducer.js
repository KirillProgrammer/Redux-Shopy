import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    itemsFavorite: []
  },
  reducers: {
    setFavorite: (state, { payload }) => {
      state.itemsFavorite.push(payload)
    },
    removeFavorite: (state, { payload }) => {
      state.itemsFavorite = state.itemsFavorite.filter((car) => car.id !== payload.id);
    }
  }
});