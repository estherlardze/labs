import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
import { InvoiceProps } from "../../types/type";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: data.invoices, 
    overlay: false,
    filteredInvoices: [] as InvoiceProps[], 
  },

  reducers: {
    filterInvoice: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredInvoices = [];
      } else {
        // @ts-ignore
        state.filteredInvoices = state.invoices.filter((detail) =>
          action.payload.includes(detail.status)
        );
      }
    },

    setOverlay: (state, action) => {
        state.overlay = action.payload;
    }
  },
});

export const { filterInvoice, setOverlay } = invoiceSlice.actions;
export default invoiceSlice.reducer;
