import { useContext, useEffect, useRef, useState } from 'react';
import { wsContext } from './wsContext';

export function useWebsocket() {
	const { ws } = useContext(wsContext);

	return { ws };
}
