import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback="">
							{/* <div className="page-wrapper"> */}
							{element}
							{/* </div> */}
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
