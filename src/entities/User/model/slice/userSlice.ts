import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, WsData } from '../types/user';

const initialState: UserSchema = {
	connectionWS: { ws: null, wsId: 'SAMPLEID' },
	authData: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setWsData: (state, action: PayloadAction<WsData>) => {
			state.connectionWS = action.payload;
		},
		// setAuthData: (state, action: PayloadAction<User>) => {
		// 	state.authData = action.payload;
		// },
		// initAuthData: (state) => {
		// 	const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
		// 	if (user) {
		// 		state.authData = JSON.parse(user);
		// 	}
		// },
		// logout: (state) => {
		// 	state.authData = null;
		// 	localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		// },
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
