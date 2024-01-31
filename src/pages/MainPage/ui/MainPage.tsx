import { useTranslation } from 'react-i18next';

import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';

import { useEffect, useState } from 'react';
import cls from './MainPage.module.scss';

const MainPage: React.FC = () => {
	const { t } = useTranslation();

	const [messages, setMessages] = useState([]);
	const [ws, setWs] = useState(null);

	// websocket.addEventListener('open', (event) => {
	// 	websocket.send('Hello Server!');
	// });

	const onClickWsConnect = () => {
		if (ws) {
			ws.send('PLEASE PUT IN');
		}
	};

	useEffect(() => {
		const websocket = new WebSocket('ws://localhost:8001');

		websocket.onopen = () => {
			console.log('WebSocket connection opened');
		};

		websocket.onmessage = (event) => {
			const newMessage = event.data;
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		};
		websocket.onclose = () => {
			console.log('WebSocket connection closed');
		};

		websocket.onerror = (error) => {
			console.error('WebSocket error:', error);
		};

		setWs(websocket);

		return () => {
			websocket.close();
		};
	}, []);

	return (
		<Page className={cls.mainPage}>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div onClick={onClickWsConnect}>Click connent with ws</div>
		</Page>
	);
};

export default MainPage;
