import { createSlice } from "@reduxjs/toolkit";
import { fetchVideoSigment } from "./operations";

const videoSegmentSlice = createSlice({
  name: "videoSegment",
  initialState: {
    videoSegment: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // item
      .addCase(fetchVideoSigment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideoSigment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.videoSegment = action.payload;
      })
      .addCase(fetchVideoSigment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

const { reducer } = videoSegmentSlice;

export default reducer;
