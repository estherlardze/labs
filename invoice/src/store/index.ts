import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./features/invoiceSlice";

export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
