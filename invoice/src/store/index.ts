import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./features/invoiceSlice";
import overlaySlice from "./features/overlaySlice";
import screenSizeSlice from "./features/screenSizeSlice";


export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    overlay: overlaySlice,
    screenSize: screenSizeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
