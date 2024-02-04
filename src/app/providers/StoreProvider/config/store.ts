import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import counterReducer from 'entities/Counter/counterSlice';
import { appReducer } from 'entities/AppState';
import { gameReducer } from 'entities/Game';

export function createReduxStore(initialState: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
		counter: counterReducer,
		app: appReducer,
		game: gameReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
