import { BlockGame } from 'shared/BlockGame/BlockGame';
import cls from './BunkerSection.module.scss';

export const BunkerSection = () => {
	return (
		<BlockGame className={cls.bunker}>
			<div className={cls.bunker__title}>Бункер:</div>
			<div className={cls.bunker__wrapper}>
				<p>Неизвестно когда был построен. Присутствует сухость в помещении, находится в лесу, у всех выживших общая комната</p>
				<p>Размер бункера: 130кв.м</p>
				<p> Время нахождения: 2 года 6 месяцев</p>
				<p>Количество еды: на 3 года и 6 месяцев</p>
				<p>В бункере присутствует: </p>
				<p>- Пистолет (2 шт.) </p>
				<p>- Эхолокатор </p>
				<p>- Бомж (занимает одно место, если не выгнать) </p>
				<p>Количество мест в бункере: 3 </p>
			</div>
		</BlockGame>
	);
};
