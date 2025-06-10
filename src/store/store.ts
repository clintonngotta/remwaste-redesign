import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";
import skipdReducer from "./reducers";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
	skips: skipdReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
