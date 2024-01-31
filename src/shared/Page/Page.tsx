import { ReactNode } from 'react';
import cls from './Page.module.scss';

interface PageProps {
	children: ReactNode;
	className: string;
}

export const Page = ({ children, className }: PageProps) => {
	return <div className={`${cls.page} ${className}`}>{children}</div>;
};
