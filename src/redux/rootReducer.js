import { createReducer } from "@reduxjs/toolkit";
import cardImage from "../components/images/iphone.webp"

const initialData = {
  itemsCart: [],
  itemsFavorite: [],
  itemsAll: [
    {
      id: 1,
      name: 'Iphone',
      image: cardImage,
      price: 17000,
    },
    {
      id: 2,
      name: 'Iphone',
      image: cardImage,
      price: 20000,
    },
    {
      id: 3,
      name: 'Iphone',
      image: cardImage,
      price: 25000,
    },
    {
      id: 4,
      name: 'Iphone',
      image: cardImage,
      price: 31000,
      unavaible: 'Нет на складе',
      noSclad: 'noSklad',
    },
    {
      id: 5,
      name: 'Iphone',
      image: cardImage,
      price: 45000,
    },
    {
      id: 6,
      name: 'Iphone',
      image: cardImage,
      price: 8000,
      unavaible: 'Продано',
      sold: 'sold',
    },
  ]
}

export const rootReducer = createReducer(initialData, (builder) => {
  builder
    .addCase('addToCart', (state, action) => {
      state.itemsCart.push(action.payload);
    })
    .addCase('removeFromCart', (state, action) => {
      state.itemsCart = state.itemsCart.filter((phone) => phone.id !== action.payload);
    })
    .addCase('addToFavorite', (state, action) => {
      state.itemsFavorite.push(action.payload);
    })
    .addCase('removeFromFavorite', (state, action) => {
      state.itemsFavorite = state.itemsFavorite.filter((car) => car.id !== action.payload.id);
    })
});