import { Block } from 'shared/Block/Block';
import cls from './Intro.module.scss';

import photo from './assets/photo.png';

export const Intro = () => {
	return (
		<Block className={cls.intro}>
			<div className={cls.intro__title}>
				<div>
					<h1>
						AndreyBozhenkov portfolio{' '}
						<br />
						Frontend developer
					</h1>
				</div>
			</div>
			<div className={cls.intro__desc}>
				<div className={cls.intro__desc_text}>
					Used by some of the worlds largest
					companies, Next.js enables you to create
					high-quality web applications with the
					power of React components.
				</div>
				<div className={cls.intro__desc_photo_wrapper}>
					<div className={cls.intro__desc_photo}>
						<span>photo.png</span>
						<img
							src={photo}
							alt="photod"
							className={
								cls.PHOTO
							}
						/>
					</div>
				</div>
			</div>
		</Block>
	);
};
