import { useTranslation } from 'react-i18next';

// eslint-disable-next-line import/no-extraneous-dependencies
import toastr from 'toastr';

import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';

import { AuthBlock } from 'widgets/AuthBlock/ui/AuthBlock';

import cls from './MainPage.module.scss';

import './mainpage.scss';

const MainPage: React.FC = () => {
	return (
		<Page className={cls.mainPage}>
			<AuthBlock />
			<Block className="client_list">AUTH CLIENT LIST:</Block>
		</Page>
	);
};

export default MainPage;
