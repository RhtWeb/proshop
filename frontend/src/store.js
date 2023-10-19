import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './slices/apiSlice';
import authSliceReducer from './slices/authSlice';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    auth : authSliceReducer,
    cart : cartSliceReducer,
    [apiSlice.reducerPath] : apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;