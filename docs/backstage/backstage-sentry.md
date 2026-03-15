# backstage-sentry

```bash
yarn --cwd packages/backend add \
    @opentelemetry/sdk-node \
    @opentelemetry/auto-instrumentations-node \
    @opentelemetry/exporter-prometheus \
    @opentelemetry/exporter-trace-otlp-http
```

```json
{
  "scripts": {
    "start": "backstage-cli package start --require ./src/instrumentation.js"
  }
}
```

```docker
// highlight-remove-next-line
CMD ["node", "packages/backend", "--config", "app-config.yaml"]
// highlight-add-next-line
CMD ["node", "--require", "./instrumentation.js", "packages/backend", "--config", "app-config.yaml"]
```

## references

|                           |                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| OpenTelemetry Support     | https://docs.sentry.io/platforms/javascript/guides/node/opentelemetry/                   |
| Backstage - OpenTelemetry | https://github.com/backstage/backstage/blob/master/docs/tutorials/setup-opentelemetry.md |
