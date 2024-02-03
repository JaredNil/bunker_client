export interface User {
	nickname: string;
}

export interface WsData {
	ws: WebSocket;
	wsId: string;
}

export interface UserSchema {
	connectionWS: WsData;
	authData?: User;
}
