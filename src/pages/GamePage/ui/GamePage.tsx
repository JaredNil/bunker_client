import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { FaRegHandPointRight, FaRegHandshake } from 'react-icons/fa';

import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';

import { requestUpdateByLogin, useWebsocket } from 'app/providers/WebsocketProvider';

import { BlockGame } from 'shared/BlockGame/BlockGame';
import cls from './GamePage.module.scss';
import { BunkerSection } from '../../../shared/BunkerSection/BunkerSection';

const GamePage: React.FC = () => {
	const { ws } = useWebsocket();
	const { players } = useSelector((state: StateSchema) => state.game);
	const { nickname } = useSelector((state: StateSchema) => state.user);

	return (
		<Page className={cls.game}>
			<BlockGame className={cls.admin}>
				<button className={cls.admin_update} type="button" onClick={() => requestUpdateByLogin(ws, nickname)}>
					ADMIN_PANEL: UPDATE
				</button>
			</BlockGame>
			<BlockGame className={cls.bar}>
				<div className={cls.bar__title}>Танец бомжей:</div>
				<div className={cls.bar__wrapper}>
					<div className={cls.bar__clients}>
						<div className={cls.bar__clients_stay}>
							<div className={cls.bar__clients_title}>Выживальщики:</div>
							<ul className={cls.bar__clients_map}>
								<li>JaredN</li>
								<li>
									<FaRegHandPointRight />
									meh
								</li>
								<li>SOMEBODY</li>
								<li>3213122131232</li>
								<li>JaredN</li>
								<li>JaredN</li>
							</ul>
						</div>
						<div className={cls.bar__clients_leave}>
							<div className={cls.bar__clients_title}>Выбывшие:</div>
							<ul className={cls.bar__clients_map}>
								<li>
									<FaRegHandshake />
									JaredN
								</li>
								<li>
									<FaRegHandshake />
									meh
								</li>
								<li>
									<FaRegHandshake />
									SOMEBODY
								</li>
								<li>
									<FaRegHandshake />
									3213122131232
								</li>
							</ul>
						</div>
					</div>
					<div className={cls.bar__panel}>ПАНЕЛЬ АКТИВНОГО ДЕЙСТВИЯ</div>
				</div>
			</BlockGame>

			<BunkerSection />

			<BlockGame className={cls.about}>
				<div className={cls.about__title}>Выживальщик: JaredN</div>
				<div className={cls.about__wrapper}>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
				</div>
			</BlockGame>
			<BlockGame className={cls.about}>
				<div className={cls.about__title}>КОРОЧЕ ЗДЕСЬ ТАБЛИЧКА СО ВСЕМИ ПАРАМЕТРАМИ</div>
				<div className={cls.about__wrapper}>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
				</div>
			</BlockGame>
			<BlockGame className={cls.about}>
				<div className={cls.about__title}>СПЕЦВОЗМОЖНОСТИ</div>
				<div className={cls.about__wrapper}>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
					<div className={cls.about__line}>
						<div className={cls.about__line_title}>Пол </div>
						<div className={cls.about__line_text}>Женщина 62 год (Пожилой)</div>
					</div>
				</div>
			</BlockGame>
		</Page>
	);
};

export default GamePage;
