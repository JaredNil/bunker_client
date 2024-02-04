import { appAction } from 'entities/AppState';

export const requestAuthByLogin = (ws: WebSocket, nicknameInput: string) => {
	console.log(`    auth: ${nicknameInput}`);
	ws.send(
		JSON.stringify({
			type: 'auth',
			body: nicknameInput,
		})
	);
};

export const requestLogoutByLogin = (ws: WebSocket, nickname: string) => {
	console.log(`    logout: ${nickname}`);

	ws.send(
		JSON.stringify({
			type: 'logout',
			body: nickname,
		})
	);
};

export const requestUpdateByLogin = (ws: WebSocket, nickname: string) => {
	console.log(`    update: ${nickname}`);
	ws.send(
		JSON.stringify({
			type: 'update',
			body: nickname,
		})
	);
};
