const Sentry = require("@sentry/node");
// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://aaefa6fab454134595af10017f7c9cd6@o4509372437233664.ingest.de.sentry.io/4509372988915792",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});