/* eslint-disable import/no-extraneous-dependencies */
import { BiLogoTypescript } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/';
import { userAction } from 'entities/User';
import { requestLogoutByLogin, useWebsocket } from 'app/providers/WebsocketProvider';
import toastr from 'toastr';
import cls from './Footer.module.scss';

import LogoBunker from '../../Navbar/assets/logo_bunker.svg';
import Separator from '../../Navbar/assets/slash.svg';

export const Footer: React.FC = () => {
	const dispatch = useDispatch();
	const { ws } = useWebsocket();

	const { nickname, isAuth } = useSelector((state: StateSchema) => state.user);

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
		<div className={cls.footer__wrapper}>
			<nav className={cls.footer}>
				<div className={cls.footer__logo}>
					<div className={cls.footer__logo_icon}>
						<LogoBunker fill="#fff" />
					</div>
					<div className={cls.footer__logo_slash}>
						<Separator />
					</div>
					<div className={cls.footer__logo_text}>
						<span>FOOTER</span>
						<span>
							<Link to="https://github.com/JaredNil">
								By JaredN
								<HiOutlineExternalLink size={14} />
							</Link>
						</span>
					</div>
					<div className={cls.footer__tools}>
						<div className={cls.footer__tools_ln}>EN</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
