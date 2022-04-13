import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
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

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;