import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import userReducer from "./features/userSlice"
import { userApi } from "./api/userApi";
import cartReducer from "./features/cartSlice"
import { orderApi } from "./api/orderApi";


export const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware,userApi.middleware,orderApi.middleware]),
});
