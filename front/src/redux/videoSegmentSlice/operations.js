import { backend } from "../../api/videoApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVideoSigment } from "../../api/videoApi";

export const fetchVideoSigment = createAsyncThunk(
  "segment/fetchVideoSigment",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const api = state.dataSet.apiKey;
    
    backend.defaults.headers.common["x-api-key"] = api;
    try {
      const data = await getVideoSigment(id);
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
