/* eslint-disable indent */
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useDispatch } from 'react-redux';
import { UserSchema, userAction } from 'entities/User';
import { appAction } from 'entities/AppState';
import toastr from 'toastr';
import { gameAction } from 'entities/Game';
import { wsContext } from '../lib/wsContext';

interface WebsocketProviderProps {
	children?: ReactNode;
}

export const WebsocketProvider: React.FC<WebsocketProviderProps> = ({ children }: WebsocketProviderProps) => {
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
				case 'init_app_state': // deprecated case, do not use
					dispatch(userAction.initAuthData());
					break;

				case 'auth_res':
					dispatch(
						userAction.setAuthData({
							isAuth: true,
							nickname: data.nickname,
							needUpdate: false,
						})
					);
					dispatch(
						gameAction.setGameData({
							players: data.clientList,
						})
					);
					dispatch(appAction.disableLoaderAuthData());
					toastr.success('С успешным успехом', null, { timeOut: 200 });
					break;

				case 'auth_err':
					dispatch(
						userAction.setAuthData({
							isAuth: false,
							nickname: '',
							needUpdate: false,
						})
					);
					dispatch(
						gameAction.setGameData({
							players: [],
						})
					);
					dispatch(appAction.disableLoaderAuthData());
					toastr.error(data.desc);
					break;

				case 'update_res':
					dispatch(
						userAction.setAuthData({
							isAuth: true,
							nickname: data.nickname,
							needUpdate: false,
						})
					);
					dispatch(
						gameAction.setGameData({
							players: data.clientList,
						})
					);
					dispatch(appAction.disableLoaderAuthData());
					toastr.success('С успешным успехом', null, { timeOut: 200 });
					break;

				case 'update_gameData':
					dispatch(
						gameAction.setGameData({
							players: data.clientList,
						})
					);
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
