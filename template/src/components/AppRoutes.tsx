import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const Home = lazy(() => import('./screens/Home'));

const AppRoutes = () => (
	<Routes>
		<Suspense fallback={<LinearProgress />}>
			<Route element={<Home />} path="/" />
		</Suspense>
	</Routes>
);

export default AppRoutes;
