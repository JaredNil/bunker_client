import { createContext } from 'react';

// export enum Theme {
// 	LIGHT = 'app_light_theme',
// 	DARK = 'app_dark_theme',
// }

export interface WsContextProps {
	setWs?: (ws: WebSocket) => void;
	ws?: WebSocket;
}

export const wsContext = createContext<WsContextProps>({});

// export const LOCAL_STORAGE_THEME_KEY = 'theme';
