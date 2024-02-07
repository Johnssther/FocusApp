import { createSlice } from "@reduxjs/toolkit";

export interface UserAuth {
  id: string,
  name: string,
  username: string,
  password: string,
  auth: boolean,
}

const initialState: UserAuth = {
  id: 'dlefrlfefio43o53r4',
  name: 'John Alejandro Hernandez',
  username: 'johnssther',
  password: '123123',
  auth: true,
}

export const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* Show User */
    showUser: (state, action) => {

    },

    /* Login User */
    loginUser: (state, action) => {

    },
    
  }
});

export default userAuthSlice.reducer;

export const { showUser, loginUser } =  userAuthSlice.actions;
