import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Expense } from "../sliders/expenses/slice";

export interface UserAuth {
  id: string,
  name: string,
  username: string,
  password: string,
  auth: boolean,
  access_token: string,
}

const initialState: UserAuth = {
  id: 'dlefrlfefio43o53r4',
  name: 'John Alejandro Hernandez',
  username: 'johnssther',
  password: '123123',
  auth: true,
  access_token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* Show User */
    showUser: (state, action) => {

    },

    /* LoginUser */
    loginUser: (state, action: PayloadAction<UserAuth>) => {      
      return { ...action.payload}
    },
    
  }
});

export default authSlice.reducer;

export const { showUser, loginUser } =  authSlice.actions;
