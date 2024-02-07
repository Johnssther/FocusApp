import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './users/slice';
import userAuthReducer from './auth/slice';
import expenseReducer from './expenses/slice';
import settingReducer from './settings/slice';

const rootReducer = combineReducers({
    users: userReducer,
    userAuth: userAuthReducer,
    expenses: expenseReducer,
    settings: settingReducer,
});

export default rootReducer;
