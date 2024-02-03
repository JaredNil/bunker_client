import { ReactNode, useEffect, useMemo, useState } from 'react';

import { wsContext } from '../lib/wsContext';

interface WebsocketProviderProps {
	children?: ReactNode;
}

export const WebsocketProvider: React.FC<WebsocketProviderProps> = ({
	children,
}: WebsocketProviderProps) => {
	const [ws, setWs] = useState(null);

	useEffect(() => {
		console.log('HOOK useWebsocket RENDER');
		const websocket = new WebSocket('ws://localhost:8001');

		setWs(websocket);

		websocket.onopen = () => {
			console.log('Client webSocket connection start');
		};
		return () => {
			websocket.close();
		};
	}, [setWs]);

	const wsConfiguration = useMemo(
		() => ({
			ws,
			setWs,
		}),
		[ws]
	);

	return <wsContext.Provider value={wsConfiguration}> {children} </wsContext.Provider>;
};
