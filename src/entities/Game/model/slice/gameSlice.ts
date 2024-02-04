import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameSchema } from '../types/gameSchema';

const initialState: GameSchema = {
	players: [],
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameData: (state, action: PayloadAction<GameSchema>) => {
			state.players = action.payload.players;
		},
	},
});

export const { actions: gameAction } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
