import '@backstage/cli/asset-types';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@backstage/ui/css/styles.css';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d222810eaeed6d09abbb80f2ae5219c3@o4509372437233664.ingest.de.sentry.io/4511043769335888",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
