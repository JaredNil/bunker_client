import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { requestUpdateByLogin, useWebsocket } from 'app/providers/WebsocketProvider';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
	isAuth: false,
	nickname: '',
	needUpdate: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.isAuth = action.payload.isAuth;
			state.nickname = action.payload.nickname;
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify([action.payload.nickname, 'stg_ws_id']));
		},
		// updatePlayersData: (state, action: PayloadAction<string[]>) => {
		// 	state.players = action.payload;
		// },
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

			if (user) {
				const [nickname, WsIdConnection] = JSON.parse(user);
				state.nickname = nickname;
				state.isAuth = true;
				state.needUpdate = true;
			} else {
				state.isAuth = false;
				state.nickname = '';
				state.needUpdate = false;
			}
		},
		logoutAuthData: (state) => {
			state.isAuth = false;
			state.nickname = '';
			// state.players = [];
			state.needUpdate = false;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
