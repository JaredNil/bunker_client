import { useState, ChangeEventHandler, useEffect } from 'react';
import toastr from 'toastr';

import { Block } from 'shared/Block/Block';

import { getUserWsData, userAction } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useWebsocket } from 'app/providers/WebsocketProvider/lib/useWebsocket';

export const AuthBlock = () => {
	const [nick, setNick] = useState(null);

	const [authClient, setAuthClient] = useState(null);
	const { ws } = useWebsocket();

	const authByLogin = () => {
		if (ws) {
			console.log('dd');
			console.log(ws);
			ws.send(
				JSON.stringify({
					type: 'auth',
					body: nick,
				})
			);
			toastr.info('Входим в аккаунт');
		} else toastr.error('Перезагрузите страницу');
	};

	return (
		<Block className="auth_block">
			<div className="click">Аутентификация</div>
			<div className="type__nick">
				<div className="type__nick-copy">
					Nickname: {nick}
				</div>
				<div className="type__nick-copy">Errors:</div>
				<div className="sd">
					<input
						className="type__nick-input"
						type="text"
						placeholder="nickname"
						onChange={(e) =>
							setNick(
								e
									.target
									.value
							)
						}
					/>
					<button
						type="submit"
						className="type__nick-btn"
						onClick={authByLogin}
					>
						Войти
					</button>
				</div>
			</div>
		</Block>
	);
};
