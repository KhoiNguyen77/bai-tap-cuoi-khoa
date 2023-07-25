import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
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
import { formProfile } from "../Pages/Profile";
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
interface UserState {
  userLogin: UserLogin | null | undefined;
  userRegister: UserRegister | null | undefined;
  userProfile: UserProfile | null | undefined;
}

const initialState: UserState = {
  userRegister: null,
  userLogin: getStoreJson(USER_LOGIN) || null,
  userProfile: null,
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
  },
});

export const { loginAction, signUpAction, profileAction } = userReducer.actions;

export default userReducer.reducer;

// Đăng ký
export const signUp = (userInfo: formRegister) => {
  return async (dispatch: dispatchType) => {

    let res = await httpNonAuth.post("/api/auth/signup", userInfo);
    if (res) {
      console.log(res.data);
      window.alert("Bạn đã đăng ký tài khoản thành công !");
      const action: PayloadAction<UserRegister> = signUpAction(userInfo);
      dispatch(action);

    }
  };
};
//Đăng nhập
export const LoginActionApi = (useLoginFrom: formValue) => {
  return async (dispatch: dispatchType) => {
    let res = await httpNonAuth.post("/api/auth/signin", useLoginFrom);
    setStoreJson(USER_LOGIN, res.data.content);
    const action: PayloadAction<UserLogin> = loginAction(res.data.content);
    dispatch(action);
    history.push('/thong-tin-ca-nhan')
  };
};
//profile
export const getProfileApi = (id: string | number) => {
  return async (dispatch: dispatchType) => {
    let res = await http.get(`/api/users/${id}`);
    if (res) {
      setStoreJson(USER_PROFILE, res.data.content);
      const action: PayloadAction<UserProfile> = profileAction(res.data.content);
      dispatch(action);

    }
  }
}
