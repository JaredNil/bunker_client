import { AppSchema } from 'entities/AppState';
import { CounterState } from 'entities/Counter/counterSlice';
import { UserSchema } from 'entities/User';

export interface StateSchema {
	app: AppSchema;
	user: UserSchema;
	counter: CounterState;
}
