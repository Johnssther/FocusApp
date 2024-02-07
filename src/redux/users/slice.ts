import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserId = string 

export interface User {
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User {
  id: string,
}

const initialState: UserWithId[] = []

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    /* Store User */
    storeUser: (state, action) => {

    },

    /* Update User */
    updateUser: (state, action) => {

    },

    /* Show User */
    showUser: (state, action) => {

    },

    /* Destroy User */
    destroyUser: (state, action) => {

    },

    /* Delete User By Id */
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    }
  }
});

export default userSlice.reducer;

export const { storeUser, updateUser, showUser, destroyUser, deleteUserById } =  userSlice.actions;
