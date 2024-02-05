import { useState, ChangeEventHandler, useEffect, FC, useCallback, useRef } from 'react';
import toastr from 'toastr';

import { useWebsocket, requestAuthByLogin, requestLogoutByLogin } from 'app/providers/WebsocketProvider';

import { Block } from 'shared/Block/Block';

import { LoaderAuth } from 'shared/LoaderAuth/LoaderAuth';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/';
import { appAction } from 'entities/AppState';
import { userAction } from 'entities/User';

import './AuthBlock.scss';

export const AuthBlock: FC = () => {
	const [nicknameInput, setNicknameInput] = useState<string>(null);

	const inputRef = useRef(null);

	const { ws } = useWebsocket();

	type ValidateRecordType = Record<string, boolean>;
	type ValidateExplainType = Record<string, string>;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const ErrorExplain: ValidateExplainType = {
		min3: 'Введите никнейм от 3 символов.',
		max20: 'Введите никнейм до 20 символов.',
		prohibitionSymbol: 'Используйте только a-Z, _, без пробела.',
	};

	const defaultValidate: ValidateRecordType = {
		min3: false,
		max20: false,
		prohibitionSymbol: false,
	};

	const [validateError, setValidateError] = useState<ValidateRecordType>(defaultValidate);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		let errorFlag = false;

		Object.keys(validateError).forEach((error) => {
			if (validateError[error]) errorFlag = true;
		});
		if (!nicknameInput) {
			errorFlag = true;
		}
		setIsError(errorFlag);
	}, [validateError, ErrorExplain, nicknameInput]);

	const validateNickname = useCallback(
		(nn: string): void => {
			const newValidate: ValidateRecordType = { ...validateError };

			if (!/([^.]){3}/i.test(nn)) {
				newValidate.min3 = true;
			} else {
				newValidate.min3 = false;
			}
			if (!/^(.){0,20}$/i.test(nn)) {
				newValidate.max20 = true;
			} else {
				newValidate.max20 = false;
			}
			if (!/^([[A-Za-z0-9_]*)$/i.test(nn)) {
				newValidate.prohibitionSymbol = true;
			} else {
				newValidate.prohibitionSymbol = false;
			}

			setValidateError(newValidate);
		},
		[validateError]
	);

	const changenicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNicknameInput(String(e.target.value));
	};

	useEffect(() => {
		validateNickname(nicknameInput);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nicknameInput]);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	// Loading by server

	const dispatch = useDispatch();
	const { isAuth, nickname } = useSelector((state: StateSchema) => state.user);
	const { isLoadingAuthData } = useSelector((state: StateSchema) => state.app);

	const submitAuthByLogin = () => {
		if (!isLoadingAuthData) {
			if (ws) {
				requestAuthByLogin(ws, nicknameInput);
				toastr.info('Вход... &#128273; &#128273; &#128273; ', null, { timeOut: 250 });
				dispatch(appAction.activeLoaderAuthData());
			} else {
				toastr.error('Нет подключения к серверу. Перезагрузите страницу');
			}
		}
	};

	const logoutAuthByLogin = () => {
		dispatch(userAction.logoutAuthData());

		if (ws) {
			requestLogoutByLogin(ws, nickname);
			toastr.info('Выход... 	&#128511; 	&#128511; 	&#128511;', null, { timeOut: 250 });
		} else {
			toastr.error('Нет подключения к серверу. Но из аккаунта в приложении вы вышли.');
		}
	};

	return (
		<Block className="authent">
			<div className="authent_title">{isAuth ? `Пользователь ${nickname}` : `Аутентификация ${nickname}`}</div>

			<div className="authent_wrapper">
				<div className="authent_input">
					<span>Введи_имя:</span>
					<input
						type="text"
						placeholder="type meh..."
						disabled={isLoadingAuthData}
						ref={inputRef}
						value={nicknameInput || ''}
						onChange={changenicknameHandler}
					/>
				</div>
				<div className="authent_submit">
					{isAuth ? (
						<button type="submit" className="authent_submit-btn" onClick={logoutAuthByLogin}>
							<span>Выйти</span>
						</button>
					) : (
						<button type="submit" className="authent_submit-btn" onClick={submitAuthByLogin} disabled={isError}>
							{isLoadingAuthData ? <LoaderAuth /> : <span>Войти</span>}
						</button>
					)}
				</div>
				{isError && (
					<div className="authent_error">
						{Object.keys(validateError).map((err) => {
							if (validateError[err]) {
								return (
									<div key={err} className="authent_error_item">
										<span>{ErrorExplain[err]}</span>
										<div />
									</div>
								);
							}
							return '';
						})}
					</div>
				)}
			</div>
		</Block>
	);
};
