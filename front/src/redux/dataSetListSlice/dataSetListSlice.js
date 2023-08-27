import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataSetItem,
  fetchDataSets,
  logOutUser,
  refreshUser,
} from "./operations";
import { getProgress } from "../frameSlice/operations";

const dataSetListSlice = createSlice({
  name: "dataSet",
  initialState: {
    dataSetList: [],
    dataSetItem: [],
    apiKey: null,
    isLoading: false,
    isLogedIn: true,
    error: null,
    nextFrame: null,
  },
  reducers: {
    getColorChecked(state, action) {
      const idx = state.dataSetItem.videosegments?.findIndex(
        (item) => item.id == action.payload
      );

      if (idx === -1) {
        return;
      }
      state.dataSetItem.videosegments[idx].isChecked = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // list
      .addCase(fetchDataSets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataSets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLogedIn = true;
        state.dataSetList = action.payload.responsesProgress;
        state.apiKey = action.payload.api;
      })
      .addCase(fetchDataSets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLogedIn = false;
      })
      // progress isAdFramesCount processedFramesCount totalFramesCount
      .addCase(getProgress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProgress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataSetList = state.dataSetList.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              isAdFramesCount: action.payload.data.isAdFramesCount,
              processedFramesCount: action.payload.data.processedFramesCount,
              totalFramesCount: action.payload.data.totalFramesCount,
            };
          }
          return item;
        });
      })
      .addCase(getProgress.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLogedIn = false;
      })
      // item
      .addCase(fetchDataSetItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataSetItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataSetItem = action.payload;
      })
      .addCase(fetchDataSetItem.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // refresh
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataSetList = action.payload;

        state.isLogedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLogedIn = false;
      })
      // logOut

      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.dataSetList = [];
        state.dataSetItem = [];
        state.isLogedIn = false;
        state.error = null;
      });
  },
});

const { actions, reducer } = dataSetListSlice;

export const { getInputApiKey, getColorChecked } = actions;

export default reducer;
