import { Suspense, useEffect, useState } from 'react';

// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';

// import { useDispatch } from 'react-redux';

import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/RouterProvider';

const App: React.FC = () => {
	// const dispatch = useDispatch();

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
