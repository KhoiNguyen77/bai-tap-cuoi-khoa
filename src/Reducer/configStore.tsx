import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    locationReducer: locationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type dispatchType = typeof store.dispatch;
