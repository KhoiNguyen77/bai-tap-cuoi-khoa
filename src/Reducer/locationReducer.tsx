import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { dispatchType } from "./configStore";
import { http, httpNonAuth, TOKEN, TOKEN_CYBERSOFT } from "../util/config";

export interface Room {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean; //done
  dieuHoa: boolean;
  wifi: boolean; //done
  bep: boolean; //done
  doXe: boolean;
  hoBoi: boolean; //done
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}
export interface Comment {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}
export interface Location {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}
export interface LocationState {
  location: Location[];
  rooms: Room[];
  roomDetail: Room | null;
  comments: Comment[];
  roomByLocation: Room[];
}
const initialState: LocationState = {
  location: [],
  rooms: [],
  roomDetail: null,
  comments: [],
  roomByLocation: [],
};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    locationAction: (state, action) => {
      state.location = action.payload;
    },
    roomAction: (state, action) => {
      state.rooms = action.payload;
    },
    roomDetailAction: (state, action) => {
      state.roomDetail = action.payload;
    },
    getCommentAction: (state, action) => {
      state.comments = action.payload;
    },
    getRoomAction: (state, action) => {
      state.roomByLocation = action.payload;
    },
  },
});

export const {
  locationAction,
  roomAction,
  roomDetailAction,
  getCommentAction,
  getRoomAction,
} = locationReducer.actions;

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

// Get room
export const getRoomAPI = () => {
  return async (dispatch: dispatchType) => {
    const res = await httpNonAuth.get("/api/phong-thue");
    console.log(res.data.content);
    if (res) {
      const action = roomAction(res.data.content);
      dispatch(action);
    }
  };
};
// Get room detail
export const getRoomDetailAPI = (id: any) => {
  return async (dispatch: Dispatch) => {
    const res = await httpNonAuth.get(`api/phong-thue/${id}`);
    console.log(res.data.content);
    if (res) {
      const action = roomDetailAction(res.data.content);
      dispatch(action);
    }
  };
};

// Get comment detail
export const getCommentAPI = (id: any) => {
  return async (dispatch: Dispatch) => {
    const res = await httpNonAuth.get(
      `/api/binh-luan/lay-binh-luan-theo-phong/${id}`
    );
    console.log(res.data.content);
    if (res) {
      const action = getCommentAction(res.data.content);
      dispatch(action);
    }
  };
};

// Get room by location
export const getRoomByLocation = (maViTri: any) => {
  return async (dispatch: Dispatch) => {
    const res = await httpNonAuth.get(
      `/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`
    );
    console.log(res.data.content);
    if (res) {
      const action = getRoomAction(res.data.content);
      dispatch(action);
    }
  };
};
