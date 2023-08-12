import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TOKEN_CYBERSOFT,
  USER_LOGIN,
  USER_PROFILE,
  getStoreJson,
  http,
  httpNonAuth,
  setStoreJson,
} from "../util/config";
import { formValue } from "../Pages/DangNhap";
import { dispatchType } from "./configStore";
import { formRegister } from "../Pages/DangKy";
import { history } from "..";

import Swal from "sweetalert2";
import { formUpdate } from "../Layout/UpdateProfile";
import { formProfile } from "../Pages/Profile";
import axios from "axios";



interface UserLogin {
  email: string;
  accenToken: string;

}
interface UserRegister {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
}

interface UserProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  avatar: string
}
interface UserUpdate {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
}
interface UserRoom {
  id: number;
  maPhong: any;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
interface UserState {
  userLogin: UserLogin | null | undefined;
  userRegister: UserRegister | null | undefined;
  userProfile: UserProfile | null | undefined;
  userUpdate: UserUpdate | null | undefined;
  userAvatar: UserProfile | null | undefined;
  userRoom: UserRoom[] | null
}

const initialState: UserState = {
  userRegister: null,
  userLogin: getStoreJson(USER_LOGIN) || null,
  userProfile: getStoreJson(USER_PROFILE) || null,
  userUpdate: null,
  userAvatar: null,
  userRoom: null
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    signUpAction: (state: UserState, action: PayloadAction<UserRegister>) => {
      state.userRegister = action.payload;
    },
    loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {
      state.userLogin = action.payload;
    },
    profileAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    updateProfileAction: (state: UserState, action: PayloadAction<UserUpdate>) => {
      state.userUpdate = action.payload;
    },
    updateAvatarAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userAvatar = action.payload;
    },
    getRoomByUserAction: (state: UserState, action: PayloadAction<UserRoom[]>) => {
      state.userRoom = action.payload;
    }
  },
});

export const { loginAction, signUpAction, profileAction, updateProfileAction, updateAvatarAction, getRoomByUserAction } = userReducer.actions;

export default userReducer.reducer;

// Đăng ký
export const signUp = (userInfo: formRegister) => {
  return async (dispatch: dispatchType) => {

    let res = await httpNonAuth.post("/api/auth/signup", userInfo);
    if (res) {
      console.log(res.data);
      Swal.fire(
        'Đăng ký tài khoản!',
        'Thành Công!',
        'success'
      )
      const action: PayloadAction<UserRegister> = signUpAction(userInfo);
      dispatch(action);

    }
  };
};
//Đăng nhập
export const LoginActionApi = (useLoginFrom: formValue) => {

  return async (dispatch: dispatchType) => {
    let res = await httpNonAuth.post("/api/auth/signin", useLoginFrom);
    if (res) {
      setStoreJson(USER_LOGIN, res.data.content);
      const action: PayloadAction<UserLogin> = loginAction(res.data.content);
      dispatch(action);
      console.log(res.data)
      history.push(`/thong-tin-ca-nhan/${res.data.content.user.id}`);
    }

  };
};
//profile
export const getProfileApi = (id: number) => {

  return async (dispatch: dispatchType) => {
    let res = await httpNonAuth.get(`/api/users/${id}`);
    if (res) {
      console.log(res.data)
      setStoreJson(USER_PROFILE, res.data.content);
      const action: PayloadAction<UserProfile> = profileAction(res.data.content);
      dispatch(action);

    }
  }
}
//update 
export const updateProfileApi = async (updateUser: formUpdate) => {
  return async (dispatch: dispatchType) => {
    const res = await httpNonAuth.put(`/api/users/${updateUser.id}`, updateUser)
    console.log(res)
    if (res) {
      console.log(res.data)
      const action = updateProfileAction(updateUser);
      dispatch(action);
      setStoreJson(USER_PROFILE, res.data.content);
      Swal.fire({
        icon: "success",
        text: "Cập nhật thông tin thành công",
      });

    }
  }
}

export const updateAvatarApi = (formData: any) => {
  return async (dispatch: dispatchType) => {
    // const res = await http.post('api/users/upload-avatar', value)

    const res = await axios.post('/api/users/upload-avatar', {
      body: {
        formFile: formData
      }
    }, {
      headers: {
        token: getStoreJson(USER_LOGIN).token,
        tokenCybersoft: `${TOKEN_CYBERSOFT}`
      }
    }).then(res => {
      console.log(res.data)
      const action: PayloadAction<UserProfile> = updateAvatarAction(res.data.content);
      dispatch(action);
      Swal.fire("Update avatar thành công");
    }).catch(err => {
      console.log(err);
    })
  }
}
//
export const getRoomByUserApi = (userId: any) => {

  return async (dispatch: dispatchType) => {
    let res = await httpNonAuth.get(`/api/dat-phong/lay-theo-nguoi-dung/${userId}`,);
    console.log(res)
    if (res) {
      setStoreJson(USER_PROFILE, res.data.content);
      const action: PayloadAction<UserRoom[]> = getRoomByUserAction(res.data.content);
      dispatch(action);

    }
  }
}