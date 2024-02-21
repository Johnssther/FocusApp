import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './sliders/users/slice';
import userAuthReducer from './auth/slice';
import expenseReducer from './sliders/expenses/slice';
import settingReducer from './sliders/settings/slice';

import { userApi } from './apis/users/usersApi';

const rootReducer = combineReducers({
    // [userReducer.name]: userReducer,
    // [authReducer.name]: authReducer,
    // [expenseReducer.name]: expenseReducer,
    // [settingReducer.name]: settingReducer,

    users: userReducer,
    userAuth: userAuthReducer,
    expenses: expenseReducer,
    settings: settingReducer,

    [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
