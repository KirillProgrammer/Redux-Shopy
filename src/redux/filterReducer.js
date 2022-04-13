import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    itemsFilter: [],
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.itemsFilter = payload;
    },
  },
});