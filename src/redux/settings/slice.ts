import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Setting, Pin } from "../../@types/Setting";

const initialState: Setting = {
  isPassword: true,
  pin: null,
}

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPin: (state, action:PayloadAction<Pin>) => {      
      state.pin = action.payload
    },
  }
});

export default settingSlice.reducer;

export const { setPin } =  settingSlice.actions;
