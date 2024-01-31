import { ReactNode } from 'react';
import cls from './Block.module.scss';

interface BlockProps {
	children: ReactNode;
	className: string;
}

export const Block = ({ children, className }: BlockProps) => {
	return <div className={`${cls.block} ${className}`}>{children}</div>;
};
