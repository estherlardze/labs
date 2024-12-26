import { createSlice } from "@reduxjs/toolkit";
import data from '../../../data.json';
import { InvoiceProps } from "../../types/type";

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoices: data.invoices,
    filteredInvoices: data.invoices,
  },
  reducers: {
    filterInvoice: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredInvoices = state.invoices;
      } else {
        state.filteredInvoices = state.invoices.filter((detail: InvoiceProps) =>
          action.payload.includes(detail.status)
        );
      }
    }
  }
});

export const { filterInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;