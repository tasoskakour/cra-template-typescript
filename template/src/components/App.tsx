import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import { SnackbarProviderProps, SnackbarProvider } from 'notistack';
import * as Sentry from '@sentry/browser';
import theme from '../utilities/theme';
import AppRoutes from './AppRoutes';
import { ApolloProvider, GaProvider } from './providers';

Sentry.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
	ignoreErrors: ['ResizeObserver loop limit exceeded'],
	enabled: process.env.NODE_ENV === 'production',
});

const snackbarOptions: SnackbarProviderProps = {
	maxSnack: 1,
	autoHideDuration: 4000,
	anchorOrigin: { vertical: 'top', horizontal: 'center' },
	// This is to silence ts complaining of missing children in props
	children: undefined,
};

const App = () => (
	<BrowserRouter>
		<GaProvider>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<ThemeProvider theme={theme}>
					<SnackbarProvider {...snackbarOptions}>
						<ApolloProvider>
							<AppRoutes />
						</ApolloProvider>
					</SnackbarProvider>
				</ThemeProvider>
			</StyledEngineProvider>
		</GaProvider>
	</BrowserRouter>
);

export default App;
