import { createContext } from 'react';

export interface WsContextProps {
	setWs?: (ws: WebSocket) => void;
	ws?: WebSocket;
}

export const wsContext = createContext<WsContextProps>({});
