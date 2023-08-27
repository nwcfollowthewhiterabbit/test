import { createSlice } from "@reduxjs/toolkit";
import { getProgress } from "./operations";

const frameSlice = createSlice({
  name: "frame",
  initialState: {
    frame: [],
    progress: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // item
      .addCase(getProgress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProgress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.progress = action.payload.data;
      })
      .addCase(getProgress.rejected, (state, action) => {
        state.error = action.payload.data;
        state.isLoading = false;
      });
  },
});

const { reducer } = frameSlice;

export default reducer;
