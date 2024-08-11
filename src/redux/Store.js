import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { themeSlice } from "./Slices/themeSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,

        theme: themeSlice.reducer,
    }
});