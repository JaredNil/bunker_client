import { useState, ChangeEventHandler, useEffect, FC, useCallback, useRef } from 'react';
import toastr from 'toastr';

import { useWebsocket } from 'app/providers/WebsocketProvider/lib/useWebsocket';

import { Block } from 'shared/Block/Block';

import './AuthBlock.scss';
import { LoaderAuth } from 'shared/LoaderAuth/LoaderAuth';

export const AuthBlock: FC = () => {
	const [nickname, setNickname] = useState<string>(null);

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
		if (!nickname) {
			errorFlag = true;
		}
		setIsError(errorFlag);
	}, [validateError, ErrorExplain, nickname]);

	const validatenicknamename = useCallback(
		(nicknamename: string): void => {
			const newValidate: ValidateRecordType = { ...validateError };

			if (!/([^.]){3}/i.test(nicknamename)) {
				newValidate.min3 = true;
			} else {
				newValidate.min3 = false;
			}
			if (!/^(.){0,20}$/i.test(nicknamename)) {
				newValidate.max20 = true;
			} else {
				newValidate.max20 = false;
			}
			if (!/^([[A-Za-z0-9_]*)$/i.test(nicknamename)) {
				newValidate.prohibitionSymbol = true;
			} else {
				newValidate.prohibitionSymbol = false;
			}

			setValidateError(newValidate);
		},
		[validateError]
	);

	const changenicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(String(e.target.value));
	};

	useEffect(() => {
		validatenicknamename(nickname);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nickname]);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	// Loading by server

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const submitAuthByLogin = () => {
		if (ws) {
			ws.send(
				JSON.stringify({
					type: 'auth',
					body: nickname,
				})
			);
			toastr.info('Входим в аккаунт');
			setIsLoading(true);
		} else {
			toastr.error(
				'Нет подключения к серверу. Перезагрузите страницу'
			);
		}
	};

	return (
		<Block className="authent">
			<div className="authent_title">Аутентификация {nickname}</div>

			<div className="authent_wrapper">
				<div className="authent_input">
					<span>Введи_имя:</span>
					<input
						type="text"
						placeholder="type meh..."
						disabled={isLoading}
						ref={inputRef}
						value={nickname || ''}
						onChange={
							changenicknameHandler
						}
					/>
				</div>
				<div className="authent_submit">
					<button
						type="submit"
						className="authent_submit-btn"
						onClick={submitAuthByLogin}
						disabled={isError}
					>
						{isLoading ? (
							<LoaderAuth />
						) : (
							<span>
								Войти
							</span>
						)}
					</button>
				</div>
				{isError && (
					<div className="authent_error">
						{Object.keys(
							validateError
						).map((err) => {
							if (
								validateError[
									err
								]
							) {
								return (
									<div
										key={
											err
										}
										className="authent_error_item"
									>
										<span>
											{
												ErrorExplain[
													err
												]
											}
										</span>
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
