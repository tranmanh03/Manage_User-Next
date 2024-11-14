import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
    account: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        doLogin: (
            state,
            action: PayloadAction<{
                token: string;
                refreshToken: string;
                id: string;
                email: string;
                name: string;
                password: string;
                role: string;
            }>
        ) => {
            state.account = {
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password,
                role: action.payload.role,
            };
            state.isAuthenticated = true;
        },
        doLogout: (state) => {
            console.log("run logout");

            state.account = null;
            state.isAuthenticated = false;
        },
        doUpdateUserInfor: (state, action: PayloadAction<UserInfor>) => {
            state.isAuthenticated = true;
            state.account = {
                ...state.account,
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password,
                role: action.payload.role,
            };
        },
    },
});

export const { doLogin, doLogout, doUpdateUserInfor } = authSlice.actions;
export const authReducer = authSlice.reducer;
