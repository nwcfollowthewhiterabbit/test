import { backend, getDataSetListProgres } from "../../api/videoApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataSetItem, getDataSetList } from "../../api/videoApi";
import { toast } from "react-toastify";

// тут делать запрос за всеми видео
export const fetchDataSets = createAsyncThunk(
  "dataSet/fetchAll",
  async (api, thunkAPI) => {
    try {
      backend.defaults.headers.common["x-api-key"] = api;

      const data = await getDataSetList();

      if (data.code === "ERR_NETWORK") {
        toast.error("Введіть правильний  ключ API");
        throw new Error();
      }

      const requestProgress = data.map(async (item) => {
        const result = await getDataSetListProgres(item.id);
        return { ...item, ...result };
      });
      const responsesProgress = await Promise.all(requestProgress);

      return { responsesProgress, api };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDataSetItem = createAsyncThunk(
  "dataSet/fetchItem",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const api = state.dataSet.apiKey;

    backend.defaults.headers.common["x-api-key"] = api;

    try {
      const data = await getDataSetItem(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "dataSet/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const api = state.dataSet.apiKey;

    if (api === null) {
      toast.error("Введіть правильний  ключ API");
      throw new Error();
    }

    backend.defaults.headers.common["x-api-key"] = api;

    try {
      const data = await getDataSetList();

      if (data.code === "ERR_NETWORK") {
        toast.error("Введіть правильний  ключ API");
        throw new Error();
      }

      const requestProgress = data.map(async (item) => {
        const result = await getDataSetListProgres(item.id);
        return { ...item, ...result };
      });
      const responsesProgress = await Promise.all(requestProgress);

      return responsesProgress;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk("dataSet/logOut", async (pers) => {
  backend.defaults.headers.common["x-api-key"] = "";

  pers.purge("key");
});
