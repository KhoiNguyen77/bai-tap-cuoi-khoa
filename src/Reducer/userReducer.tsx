import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOGIN, getStoreJson, httpNonAuth, setStoreJson } from '../util/config';
interface UserLogin {
    email: string;
    accenToken: string;
}
interface UserState {
    useLogin: UserLogin | null | undefined;
}


const initialState: UserState = {
    useLogin: getStoreJson(USER_LOGIN)
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {

        }
    }
});

export const { } = userReducer.actions

export default userReducer.reducer