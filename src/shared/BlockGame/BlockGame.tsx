import { ReactNode } from 'react';
import cls from './BlockGame.module.scss';

interface BlockProps {
	children: ReactNode;
	className: string;
}

export const BlockGame = ({ children, className }: BlockProps) => {
	return (
		<section className={cls.gameSection}>
			<div className={`${cls.blockGame} ${className}`}>{children}</div>
		</section>
	);
};
