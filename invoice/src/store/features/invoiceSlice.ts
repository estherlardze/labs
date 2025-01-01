import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
import { InvoiceProps } from "../../types/type";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: data.invoices, 
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
  },
});

export const { filterInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
