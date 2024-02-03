import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { WebsocketProvider } from 'app/providers/WebsocketProvider';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { ThemeProvider } from 'app/providers/ThemeProvider';

import App from './app/App';

import 'app/config/i18n/i18n';

import 'app/styles/index.scss';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
	<WebsocketProvider>
		<StoreProvider>
			<BrowserRouter>
				{/* <ErrorBoundary> */}
				<App />
				{/* </ErrorBoundary> */}
			</BrowserRouter>
		</StoreProvider>
	</WebsocketProvider>
);
