import { createSlice } from "@reduxjs/toolkit";


const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    overlay: false,
  },

  reducers: {

    setOverlay: (state, action) => {
        state.overlay = action.payload;
    }
  },
});

export const { setOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
