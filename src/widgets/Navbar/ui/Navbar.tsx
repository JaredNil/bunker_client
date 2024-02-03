/* eslint-disable import/no-extraneous-dependencies */
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';

import Separator from '../assets/slash.svg';

export const Navbar: React.FC = () => {
	return (
		<div className={cls.navbar__wrapper}>
			<nav className={cls.navbar}>
				<div className={cls.navbar__logo}>
					<div className={cls.navbar__logo_icon}>
						<BiLogoTypescript
							fill="#fff"
							size={30}
						/>
					</div>
					<div className={cls.navbar__logo_slash}>
						<Separator />
					</div>
					<div className={cls.navbar__logo_text}>
						BUNKER GAME SOCKET ONLINE
					</div>
				</div>
				<ul className={cls.navbar__anchors}>
					<li className={cls.navbar__anchor}>
						Sample1
					</li>
					<li className={cls.navbar__anchor}>
						Sample1
					</li>
				</ul>
				<div className={cls.navbar__links}>
					<div className={cls.navbar__link_ln}>
						EN
					</div>
					<div className={cls.navbar__link_pj}>
						<Link to="/">Проекты</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
