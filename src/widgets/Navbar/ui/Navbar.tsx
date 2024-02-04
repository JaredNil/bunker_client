/* eslint-disable import/no-extraneous-dependencies */
import { BiLogoTypescript } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/';
import { userAction } from 'entities/User';
import { requestLogoutByLogin, useWebsocket } from 'app/providers/WebsocketProvider';
import toastr from 'toastr';
import cls from './Navbar.module.scss';

import LogoBunker from '../assets/logo_bunker.svg';
import Separator from '../assets/slash.svg';

export const Navbar: React.FC = () => {
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
		<div className={cls.navbar__wrapper}>
			<nav className={cls.navbar}>
				<div className={cls.navbar__logo}>
					<div className={cls.navbar__logo_icon}>
						<LogoBunker fill="#fff" />
					</div>
					<div className={cls.navbar__logo_slash}>
						<Separator />
					</div>
					<div className={cls.navbar__logo_text}>
						<span>BUNKER GAME ONLINE</span>
						<span>
							<Link to="https://github.com/JaredNil">
								By JaredN
								<HiOutlineExternalLink size={14} />
							</Link>
						</span>
					</div>
					<div className={cls.navbar__tools}>
						<div className={cls.navbar__tools_ln}>EN</div>
					</div>
				</div>

				<div className={cls.navbar__links}>
					<ul className={cls.navbar__anchors}>
						<li className={cls.navbar__anchor}>
							<Link to="/">Игра</Link>
						</li>
						<li className={cls.navbar__anchor}>
							<Link to="/">Комнаты</Link>
						</li>
						<li className={cls.navbar__anchor}>
							<Link to="/">Правила</Link>
						</li>
						<li className={cls.navbar__anchor}>
							<Link to="/">Контакты</Link>
						</li>
					</ul>
					<div className={cls.navbar__statusBtn}>
						{isAuth ? (
							<>
								<div className={cls.navbar__statusBtn_title}>
									Выживальщик, <br /> <span>{nickname}</span>
								</div>
								<div className={cls.navbar__statusBtn_link} onClick={logoutAuthByLogin}>
									Выйти из <br /> бункера
								</div>
							</>
						) : (
							<>
								<div className={cls.navbar__statusBtn_title}>
									Привет, <br /> странник
								</div>
								<Link to="/" className={cls.navbar__statusBtn_link}>
									Войти в <br /> бункер
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};
