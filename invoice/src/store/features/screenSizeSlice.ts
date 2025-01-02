import { createSlice } from "@reduxjs/toolkit";


const screenSizeSlice = createSlice({
  name: "screen",
  initialState: {
    ismobile: false,
  },

  reducers: {
    setScreenSize: (state, action) => {
        state.ismobile = action.payload <= 530;
    }
  },
});

export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
