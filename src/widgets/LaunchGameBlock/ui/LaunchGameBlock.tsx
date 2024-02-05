/* eslint-disable react/no-array-index-key */
import toastr from 'toastr';

import { Block } from 'shared/Block/Block';

import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import cls from './LaunchGameBlock.module.scss';

export const LaunchGameBlock = () => {
	const { players } = useSelector((state: StateSchema) => state.game);
	console.log(players);

	const createBunker = () => {
		toastr.success('Ну погнали');
	};
	const waitingBunker = () => {
		toastr.error('Ждите народ');
	};

	return (
		<Block className={cls.launch}>
			<div className={cls.launch__title}>Создание игровой сессии:</div>
			<div className={cls.launch__counter}>
				<span>{players.length}</span> - подключенных игроков
			</div>
			<div className={cls.launch__desc}>
				Игровая сессия возможна при подключении 4-ех игроков. Как только кто-то нажмет на кнопку СОЗДАТЬ БУНКЕР - будет создана игровая
				сессия, в которой будет четко закреплены конкретные ники участников. По ним можно будет вернуться в сессию, а новые участники не
				будут допущены.
			</div>

			{players.length <= 4 ? (
				<button type="button" className={cls.launch__btn} onClick={createBunker}>
					СОЗДАТЬ БУНКЕР
				</button>
			) : (
				<button type="button" className={cls.launch__btn} onClick={waitingBunker}>
					ОЖИДАНИЕ ИГРОКОВ
				</button>
			)}

			<div className={cls.launch__clients}>
				<div className={cls.launch__clients_title}>Подключенные выживальщики:</div>
				<ul className={cls.launch__clients_items}>
					{players.map((p, i) => (
						<li key={i}>{p}</li>
					))}
				</ul>
			</div>
		</Block>
	);
};
