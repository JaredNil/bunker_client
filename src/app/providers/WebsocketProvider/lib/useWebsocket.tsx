import { useContext } from 'react';
import { wsContext } from './wsContext';

export function useWebsocket() {
	const { ws } = useContext(wsContext);

	return { ws };
}
