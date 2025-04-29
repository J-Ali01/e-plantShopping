import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'; // Match File Extension

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
