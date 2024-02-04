import { createSlice } from '@reduxjs/toolkit';
import { AppSchema } from '../types/appSchema';

const initialState: AppSchema = {
	isLoadingAuthData: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		activeLoaderAuthData: (state) => {
			state.isLoadingAuthData = true;
		},
		disableLoaderAuthData: (state) => {
			state.isLoadingAuthData = false;
		},
	},
});

export const { actions: appAction } = appSlice;
export const { reducer: appReducer } = appSlice;
