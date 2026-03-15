// https://docs.sentry.io/platforms/javascript/guides/node/

const Sentry = require("@sentry/node");
// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://32a1e589db067831ed5b5efd2a9d148b@o4509372437233664.ingest.de.sentry.io/4509372588556368",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  enableLogs: true,
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  enableMetrics: true,  
});

// https://backstage.io/docs/tutorials/setup-opentelemetry

// Prevent from running more than once (due to worker threads)
// const { isMainThread } = require('node:worker_threads');
// const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');


// if (isMainThread) {
//   const { NodeSDK } = require('@opentelemetry/sdk-node');
//   const {
//     getNodeAutoInstrumentations,
//   } = require('@opentelemetry/auto-instrumentations-node');
//   const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
//   const {
//     OTLPTraceExporter,
//   } = require('@opentelemetry/exporter-trace-otlp-http');

//   // By default exports the metrics on localhost:9464/metrics
//   const prometheusExporter = new PrometheusExporter();
//   // We post the traces to localhost:4318/v1/traces
//   const otlpTraceExporter = new OTLPTraceExporter({
//     // Default Jaeger URL trace endpoint.
//     url: 'http://localhost:4318/v1/traces',
//   });
//   const sdk = new NodeSDK({
//     metricReader: prometheusExporter,
//     traceExporter: otlpTraceExporter,
//     instrumentations: [getNodeAutoInstrumentations()],
//   });

//   diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

//   sdk.start();
// }