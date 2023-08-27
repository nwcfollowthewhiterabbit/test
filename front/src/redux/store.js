import { configureStore } from "@reduxjs/toolkit";
import dataSetReducer from "./dataSetListSlice/dataSetListSlice";
import videoSegmentReducer from "./videoSegmentSlice/videoSegmentSlice";
import frameSlice from "./frameSlice/frameSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "key",
  whitelist: ["apiKey"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, dataSetReducer);

export const store = configureStore({
  reducer: {
    dataSet: persistedReducer,
    videoSegment: videoSegmentReducer,
    frame: frameSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
