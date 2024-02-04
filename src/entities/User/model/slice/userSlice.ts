import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
	isAuth: false,
	nickname: '0',
	players: ['0', '0'],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.isAuth = action.payload.isAuth;
			state.nickname = action.payload.nickname;
			state.players = action.payload.players;
		},
		updatePlayersData: (state, action: PayloadAction<string[]>) => {
			state.players = action.payload;
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
