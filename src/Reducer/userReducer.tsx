import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOGIN, getStoreJson, http, httpNonAuth, setStoreJson } from '../util/config';
import { formValue } from '../Pages/DangNhap';
import { dispatchType } from './configStore';
import { formRegister } from '../Pages/DangKy';
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
interface UserState {
    userLogin: UserLogin | null | undefined;
    userRegister: UserRegister | null | undefined;
}


const initialState: UserState = {
    userRegister: null,
    userLogin: getStoreJson(USER_LOGIN) || null

}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        signUpAction: (state: UserState, action: PayloadAction<UserRegister>) => {
            state.userRegister = action.payload;
        },
        loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {
            state.userLogin = action.payload
        }

    }
});

export const { loginAction, signUpAction } = userReducer.actions

export default userReducer.reducer

// Async action
export const signUp = (userInfo: formRegister) => {
    return async (dispatch: dispatchType) => {
        const res = await http.post('/api/auth/signup', userInfo)
        if (res) {
            window.alert("Bạn đã đăng ký tài khoản thành công !")
            const action: PayloadAction<UserRegister> = signUpAction(userInfo);
            dispatch(action);

        }
    }
}


//Đăng nhập
export const LoginActionApi = (useLoginFrom: formValue) => {
    return async (dispatch: dispatchType) => {
        let res = await http.post('/api/auth/signin', useLoginFrom);
        setStoreJson(USER_LOGIN, res.data.content)
        const action: PayloadAction<UserLogin> = loginAction(res.data.content)
        dispatch(action);
    }
}