import { AppSchema } from 'entities/AppState';
import { CounterState } from 'entities/Counter/counterSlice';
import { GameSchema } from 'entities/Game';
import { UserSchema } from 'entities/User';

export interface StateSchema {
	app: AppSchema;
	user: UserSchema;
	game: GameSchema;
	counter: CounterState;
}
