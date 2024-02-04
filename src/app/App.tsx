import { Suspense, useEffect, useState } from 'react';

// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';

// import { useDispatch } from 'react-redux';

import { Navbar } from 'widgets/Navbar';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';
import { AppRouter } from './providers/RouterProvider';

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
