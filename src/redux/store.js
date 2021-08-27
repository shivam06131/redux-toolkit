import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import requestData from "./rtkQuery/requestData";
import { dataAPi } from "./rtkQuery/services/data";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    requestData,
    [dataAPi.reducerPath]: dataAPi.reducer,
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataAPi.middleware)
});

setupListeners(store.dispatch);
