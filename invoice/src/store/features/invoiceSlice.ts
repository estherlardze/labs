import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
import { InvoiceProps } from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export const addInvoice = createAsyncThunk(
  "invoices/addInvoice",
  async (invoice: InvoiceProps, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return invoice;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

type initialStateType = {
  invoices: InvoiceProps[];
  filteredInvoices: InvoiceProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  statusFilter: string[];
};

const initialState: initialStateType = {
  invoices: data.invoices,
  filteredInvoices: [] as InvoiceProps[],
  loading: "idle",
  statusFilter: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,

  reducers: {
    filterInvoice: (state) => {
      // if (action.payload.length === 0) {
      //   state.filteredInvoices = [];
      // } else {
      //   state.filteredInvoices = state.invoices.filter((detail) =>
      //     action.payload.includes(detail.status)
      //   );
      // }
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
  extraReducers: (builder) => {
    builder.addCase(addInvoice.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(addInvoice.fulfilled, (state, action) => {
      const { payload } = action;

      const invoiceExists = state.invoices.find(
        (invoice) => invoice.id === payload.id
      );

      if (!invoiceExists) {
        state.invoices.unshift(payload);
        state.loading = "succeeded";
      } else {
        const invoiceIndex = state.invoices.findIndex(
          (invoice) => invoice.id === payload.id
        );
        state.invoices[invoiceIndex] = payload;
      }

      state.loading = "succeeded";
    });

    builder.addCase(addInvoice.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const selectFilteredInvoices = (state: RootState) =>
  state.invoices.filteredInvoices;
export const selectInvoices = (state: RootState) => state.invoices.invoices;
export const selectLoading = (state: RootState) => state.invoices.loading;
export const selectStatusFilter = (state: RootState) =>
  state.invoices.statusFilter;
export const { filterInvoice, deleteInvoice, updateStatusFilter } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
