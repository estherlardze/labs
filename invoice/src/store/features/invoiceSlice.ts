import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
import { InvoiceProps } from "../../types/type";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: data.invoices,
    filteredInvoices: [] as InvoiceProps[],
    currentInvoiceId: ''
  },

  reducers: {
    filterInvoice: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredInvoices = [];
      } else {
        state.filteredInvoices = state.invoices.filter((detail) =>
          action.payload.includes(detail.status)
        );
      }
    },

    deleteInvoice: (state, action) => {
      const id = action.payload;
      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
  },
});

export const { filterInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
