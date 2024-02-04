import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserData = (state: StateSchema) => {
	return state.user;
};
