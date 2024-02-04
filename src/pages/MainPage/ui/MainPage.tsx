/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';

import { AuthBlock } from 'widgets/AuthBlock/ui/AuthBlock';

import { getUserData } from 'entities/User';

import { useEffect } from 'react';

import './mainpage.scss';
import cls from './MainPage.module.scss';

const MainPage: React.FC = () => {
	const { isAuth, nickname, players = ['Empty'] } = useSelector(getUserData);

	return (
		<Page className={cls.mainPage}>
			<AuthBlock />
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
					</>
				) : (
					<div className="client_list-user">Неавторизован</div>
				)}
			</Block>
		</Page>
	);
};

export default MainPage;
