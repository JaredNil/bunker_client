import { Suspense, useEffect } from 'react';

import { Navbar } from 'widgets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { AppRouter } from 'app/providers/RouterProvider';
import { requestUpdateByLogin, useWebsocket } from 'app/providers/WebsocketProvider';

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userAction.initAuthData());
	}, [dispatch]);

	return (
		<div className="application">
			<Suspense fallback="">
				<Navbar />
				<main className="content">
					<AppRouter />
				</main>
			</Suspense>
		</div>
	);
};

export default App;
