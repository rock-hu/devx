import '@backstage/cli/asset-types';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@backstage/ui/css/styles.css';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://cdb13930fb316d8b7352dedc1edf546e@o4509372437233664.ingest.de.sentry.io/4509372587049040',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  enableMetrics: true,
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ['log', 'warn', 'error'] }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
