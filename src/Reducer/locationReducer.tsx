import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dispatchType } from "./configStore";
import { http, httpNonAuth, TOKEN, TOKEN_CYBERSOFT } from "../util/config";

export interface Location {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}
export interface LocationState {
  location: Location[];
}
const initialState: LocationState = {
  location: [],
};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    locationAction: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { locationAction } = locationReducer.actions;

export default locationReducer.reducer;

//Get locationn

export const getLocationAPI = () => {
  return async (dispatch: dispatchType) => {
    const res = await httpNonAuth.get("/api/vi-tri");
    console.log(res.data.content);
    if (res) {
      const action = locationAction(res.data.content);
      dispatch(action);
    }
  };
};
