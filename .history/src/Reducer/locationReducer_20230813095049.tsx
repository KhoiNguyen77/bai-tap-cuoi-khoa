import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { dispatchType } from "./configStore";
import {
  http,
  httpNonAuth,
  setStoreJson,
  TOKEN,
  TOKEN_CYBERSOFT,
} from "../util/config";
import Swal from "sweetalert2";

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
export interface BookRoom {
  id: number;
  maPhong: any;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
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
    if (res) {
      setStoreJson("location", res.data.content);
      const action = locationAction(res.data.content);
      dispatch(action);
    }
  };
};

// Get room
export const getRoomAPI = () => {
  return async (dispatch: dispatchType) => {
    const res = await httpNonAuth.get("/api/phong-thue");
    if (res) {
      setStoreJson("rooms", res.data.content);
      const action = roomAction(res.data.content);
      dispatch(action);
    }
  };
};
// Get room detail
export const getRoomDetailAPI = (id: any) => {
  return async (dispatch: Dispatch) => {
    const res = await httpNonAuth.get(`api/phong-thue/${id}`);
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
    if (res) {
      const action = getRoomAction(res.data.content);
      dispatch(action);
    }
  };
};

// Book room
export const bookRoom = async (data: any) => {
  const res = await httpNonAuth.post("/api/dat-phong", data);
  if (res) {
    Swal.fire({
      icon: "success",
      text: "Đặt phòng thành công",
    });
  }
};
export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// Add comment
// export const addComment = async (data: any) => {
//   const res = await http.post("/api/binh-luan", data);
//   console.log(res.data.content);
//   if (res) {
//     Toast.fire({
//       icon: "success",
//       title: "Thêm bình luận thành công",
//     });
//   }
// };

//Add comment
export const addComment = (data: any) => {
  return async (dispatch: Dispatch) => {
    const res = await http.post("/api/binh-luan", data);
    console.log(res.data.content);
    if (res) {
      Toast.fire({
        icon: "success",
        title: "Thêm bình luận thành công",
      });

      const comment = await httpNonAuth.get(
        `/api/binh-luan/lay-binh-luan-theo-phong/${res.data.content.maPhong}`
      );

      dispatch(getCommentAction(comment.data.content))
    }
  }
};

export const deleteRoomById = (id: number) => {
  return async (dispatch: dispatchType) => {
    const res = await http.delete(`/api/phong-thue/${id}`)
 if (res) {
      Toast.fire({
        icon: "success",
        title: "Xoá phòng thành công",
      });
      const newRooms = await httpNonAuth.get("/api/phong-thue");
      setStoreJson("rooms", newRooms.data.content);
      dispatch(roomAction(newRooms.data.content));
    }
  }
}

export const getBookingList = () => {
  return async (dispatch: dispatchType) => {
    const res = await httpNonAuth.get('api/dat-phong');
    if (res) {
      setStoreJson("bookingList", res.data.content);
      dispatch()
    }
  }
}


