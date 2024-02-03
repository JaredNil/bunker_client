import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserWsData = (state: StateSchema) => state.user.connectionWS;
