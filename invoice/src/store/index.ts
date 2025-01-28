import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./features/invoiceSlice";
import overlaySlice from "./features/overlaySlice";
import screenSizeSlice from "./features/screenSizeSlice";
import { postApiSlice } from "./post/PostApiSlice";


export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    overlay: overlaySlice,
    screenSize: screenSizeSlice,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
