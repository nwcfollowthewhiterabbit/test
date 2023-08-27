import { createAsyncThunk } from "@reduxjs/toolkit";
import { backend, getDataSetListProgres, markFrame } from "../../api/videoApi";
import { omit } from "lodash";
import { toast } from "react-toastify";

export const patchFrames = createAsyncThunk(
  "frames/patchFrames",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const api = state.dataSet.apiKey;

    backend.defaults.headers.common["x-api-key"] = api;

    try {
      const requests = data.map((item) => markFrame(item.id, omit(item, "id")));

      const responses = await Promise.all(requests);

      toast.success("The Frames відмічено успішно");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProgress = createAsyncThunk(
  "frames/getProgress",
  async (id, thunkAPI) => {
    try {
      const data = await getDataSetListProgres(id);
      return { data, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
