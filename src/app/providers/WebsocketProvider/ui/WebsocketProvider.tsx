/* eslint-disable indent */
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useDispatch } from 'react-redux';
import { UserSchema, userAction } from 'entities/User';
import { wsContext } from '../lib/wsContext';

interface WebsocketProviderProps {
	children?: ReactNode;
}

export const WebsocketProvider: React.FC<WebsocketProviderProps> = ({
	children,
}: WebsocketProviderProps) => {
	const [ws, setWs] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const websocket = new WebSocket('ws://localhost:8001');

		setWs(websocket);

		websocket.onopen = () => {
			console.log('Client webSocket connection start');
		};

		websocket.onmessage = ({ data }) => {
			data = JSON.parse(data);

			console.log('Sent message');
			console.log(data);
			switch (data.type) {
				case 'auth_res':
					dispatch(
						userAction.setAuthData({
							isAuth: true,
							nickname: data.nickname,
							players: data.clientList,
						})
					);
					break;
				case 'sm':
					break;
				default:
					break;
			}
		};

		websocket.onerror = (error) => {
			console.log(error);
		};

		websocket.onclose = () => {
			console.log('Client webSocket connection END');
		};
		console.log(websocket);
		return () => {
			websocket.close();
		};
	}, [setWs, dispatch]);

	const wsConfiguration = useMemo(
		() => ({
			ws,
			setWs,
		}),
		[ws]
	);

	return <wsContext.Provider value={wsConfiguration}> {children} </wsContext.Provider>;
};
