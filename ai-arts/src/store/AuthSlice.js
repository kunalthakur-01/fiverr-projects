import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
    name: 'ai-arts-auth',
    initialState: { token: '', isLogin: localStorage.getItem('token')},
    reducers: {
        checkAuthentication (state, action) {
            state.token = action.payload;
            if(state.token) {
                state.isLogin = true;
                console.log(state.isLogin);
                localStorage.setItem('token', action.payload);
            }
            else {
                state.isLogin = false;
                localStorage.removeItem('token');
                console.log(state.isLogin);
            }
        }
    }
});


export const firebaseActions = firebaseSlice.actions;

export default firebaseSlice.reducer;