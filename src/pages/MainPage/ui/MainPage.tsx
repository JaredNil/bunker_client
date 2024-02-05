/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';

import { AuthBlock } from 'widgets/AuthBlock/ui/AuthBlock';

import { getUserData } from 'entities/User';

import './mainpage.scss';
import { requestUpdateByLogin, useWebsocket } from 'app/providers/WebsocketProvider';
import { LaunchGameBlock } from 'widgets/LaunchGameBlock';
import cls from './MainPage.module.scss';

const MainPage: React.FC = () => {
	const { isAuth, nickname } = useSelector(getUserData);
	const { players } = useSelector((state: StateSchema) => state.game);

	const { ws } = useWebsocket();

	const updateDataByLogin = () => {
		console.log('ws');
		if (ws) {
			if (isAuth) {
				requestUpdateByLogin(ws, nickname);
			}
		}
	};

	return (
		<Page className={cls.mainPage}>
			{isAuth ? <LaunchGameBlock /> : <AuthBlock />}

			<Block className="client_list">
				{isAuth ? (
					<>
						<div className="client_list-user">
							<p className="client_list-user_title">User:</p>
							{nickname}
						</div>
						<div className="client_list-user">
							<p className="client_list-user_title">PlayerList:</p>
							{players.map((p) => {
								return <p key={p}>{p}</p>;
							})}
						</div>
						<button className="client_list-update" type="button" onClick={updateDataByLogin}>
							UPDATE
						</button>
					</>
				) : (
					<div className="client_list-user">Неавторизован</div>
				)}
			</Block>
		</Page>
	);
};

export default MainPage;
