import { createSlice } from "@reduxjs/toolkit";
//import data from "../../../data.json";
import { InvoiceProps } from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type initialStateType = {
  invoices: InvoiceProps[];
  filteredInvoices: InvoiceProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  statusFilter: string[];
};

const initialState: initialStateType = {
  invoices: [] as InvoiceProps[],
  filteredInvoices: [] as InvoiceProps[],
  loading: "idle",
  statusFilter: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,

  reducers: {
    setInvoices: (state, action: PayloadAction<InvoiceProps[]>) => {
      state.invoices = action.payload;
      state.filteredInvoices = action.payload;
    },

    filterInvoice: (state) => {
      state.filteredInvoices = !state.statusFilter.length
        ? state.invoices
        : state.invoices.filter((invoice) =>
            state.statusFilter.includes(invoice.status)
          );
    },

    updateStatusFilter: (state, action: PayloadAction<string>) => {
      const status = action.payload;
      state.statusFilter = state.statusFilter.includes(status)
        ? state.statusFilter.filter((item) => item !== status)
        : [...state.statusFilter, status];
    },

    deleteInvoice: (state, action) => {
      const id = action.payload;
      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
  },
});

export const selectFilteredInvoices = (state: RootState) =>
  state.invoices.filteredInvoices;
export const selectInvoices = (state: RootState) => state.invoices.invoices;
export const selectLoading = (state: RootState) => state.invoices.loading;
export const selectStatusFilter = (state: RootState) =>
  state.invoices.statusFilter;
export const { filterInvoice, deleteInvoice, updateStatusFilter, setInvoices } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
