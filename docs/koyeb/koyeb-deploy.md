# koyeb-deploy

## echo "\*\*\*" | docker login ghcr.io -u rock-hu --password-stdin

```bash
WARNING! Your credentials are stored unencrypted in '/home/runner/.docker/config.json'.
Configure a credential helper to remove this warning. See
https://docs.docker.com/go/credential-store/

Login Succeeded
```

## docker pull ghcr.io/rock-hu/backstage:latest

```bash
latest: Pulling from rock-hu/backstage

...


Status: Downloaded newer image for ghcr.io/rock-hu/backstage:latest
ghcr.io/rock-hu/backstage:latest
```

## docker images

```bash
REPOSITORY                                   TAG       IMAGE ID       CREATED          SIZE
ghcr.io/rock-hu/backstage                    latest    bbd0176b83ca   17 minutes ago   1.18GB
ghcr.io/dependabot/dependabot-updater-core   latest    d00a8a1737cb   4 days ago       795MB
ghcr.io/github/github-mcp-server             latest    5b7da589d110   4 days ago       41.2MB
ghcr.io/github/gh-aw-mcpg                    latest    e688f4282ff9   7 days ago       55.6MB
ghcr.io/github/gh-aw-firewall/agent          latest    5945f42d165a   2 weeks ago      466MB
ghcr.io/github/gh-aw-firewall/api-proxy      latest    10edf0628fb2   2 weeks ago      169MB
ghcr.io/github/gh-aw-firewall/squid          latest    afdafa0746fa   3 weeks ago      231MB
```

## koyeb version

```bash
5.10.0
```

## koyeb login --token

```bash
koyeb login --token $KOYEB_TOKEN
Do you want to overwrite your current configuration file (/home/rock/.koyeb.yaml): y
✗ Enter your personal access token. You can create a new token here (https://app.koyeb.com/user/settings/api):
INFO[0008] Creating new configuration in /home/rock/.koyeb.yaml
```

## koyeb apps list

```bash
ID      	NAME          	STATUS 	DOMAINS                     	CREATED AT
62ed9917	backstage-devx	HEALTHY	["backstage-devx.koyeb.app"]	14 Mar 26 14:10 UTC
```

## koyeb services list

```bash
ID      	APP           	NAME     	TYPE	STATUS 	CREATED AT
76eb45b2	backstage-devx	backstage	WEB 	HEALTHY	14 Mar 26 14:10 UTC
```

## koyeb services redeploy backstage-devx/backstage

```bash
INFO[0003] Service deployment in progress. To access the build logs, run: `koyeb deployment logs 82e2a5f0 -t build`. For the runtime logs, run `koyeb deployment logs 82e2a5f0`
INFO[0003] Service backstage-devx/backstage redeployed.
```

## koyeb instances list --app backstage-devx

```bash
ID      	SERVICE                             	STATUS 	REGION	DATACENTER	CREATED AT
af4f6377	76eb45b2-16a6-453c-bb51-b3ad80eb0170	HEALTHY	fra   	fra1      	14 Mar 26 14:16 UTC
```

```
Loading config from MergedConfigSource{FileConfigSource{path="/app/app-config.yaml"}, FileConfigSource{path="/app/app-config.production.yaml"}, EnvConfigSource{count=0}}
```

```json
{
  "level": "info",
  "message": "Found 1 new secrets in config that will be redacted",
  "service": "backstage"
}
```

```json
{
  "level": "info",
  "message": "Listening on :7007",
  "service": "rootHttpRouter"
}
```

```json
{
  "level": "info",
  "message": "Plugin initialization started: 'app', 'auth', 'catalog', 'events', 'kubernetes', 'notifications', 'permission', 'proxy', 'scaffolder', 'search', 'signals', 'techdocs'",
  "service": "backstage",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'app' threw an error during startup, waiting for 11 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'app' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'app' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'app' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'app' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 0)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'proxy' threw an error during startup, waiting for 10 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'proxy' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'proxy' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'proxy' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'proxy' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 1)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'scaffolder' threw an error during startup, waiting for 9 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'scaffolder' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'scaffolder' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'scaffolder' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'scaffolder' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 2)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'techdocs' threw an error during startup, waiting for 8 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'techdocs' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'techdocs' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'techdocs' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'techdocs' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 3)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'auth' threw an error during startup, waiting for 7 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'auth' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'auth' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'auth' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'auth' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 4)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'catalog' threw an error during startup, waiting for 6 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'catalog' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'catalog' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'catalog' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'catalog' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 5)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'permission' threw an error during startup, waiting for 5 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'permission' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'permission' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'permission' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'permission' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 6)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'search' threw an error during startup, waiting for 4 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'search' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'search' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'search' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'search' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 7)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'kubernetes' threw an error during startup, waiting for 3 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'kubernetes' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'kubernetes' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'kubernetes' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'kubernetes' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 8)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'notifications' threw an error during startup, waiting for 2 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'notifications' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'notifications' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'notifications' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'notifications' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 9)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'signals' threw an error during startup, waiting for 1 other plugins to finish before shutting down the process. Failed to instantiate service 'core.httpRouter' for 'signals' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'signals' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'signals' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'signals' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 10)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Plugin 'events' threw an error during startup. Failed to instantiate service 'core.httpRouter' for 'events' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'events' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "service": "backstage",
  "stack": "Error: Failed to instantiate service 'core.httpRouter' for 'events' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'events' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at /app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:232:21\n    at async Promise.all (index 0)\n    at async ServiceRegistry.initializeEagerServicesWithScope (/app/node_modules/@backstage/backend-app-api/dist/wiring/ServiceRegistry.cjs.js:161:11)\n    at async /app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:285:11\n    at async Promise.all (index 11)\n    at async #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:282:5)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "initialization"
}
```

```json
{
  "level": "info",
  "message": "Plugin initialization complete, newly initialized: 'app', 'proxy', 'scaffolder', 'techdocs', 'auth', 'catalog', 'permission', 'search', 'kubernetes', 'notifications', 'signals', 'events'",
  "service": "backstage",
  "type": "initialization"
}
```

```json
{
  "level": "error",
  "message": "Unhandled rejection Backend startup failed due to the following errors:\n  Plugin 'app' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'app' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'app' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'proxy' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'proxy' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'proxy' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'scaffolder' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'scaffolder' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'scaffolder' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'techdocs' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'techdocs' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'techdocs' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'auth' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'auth' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'auth' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'catalog' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'catalog' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'catalog' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'permission' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'permission' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'permission' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'search' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'search' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'search' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'kubernetes' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'kubernetes' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'kubernetes' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'notifications' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'notifications' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'notifications' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'signals' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'signals' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'signals' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'events' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'events' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'events' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'",
  "name": "BackendStartupError",
  "service": "backstage",
  "stack": "BackendStartupError: Backend startup failed due to the following errors:\n  Plugin 'app' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'app' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'app' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'proxy' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'proxy' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'proxy' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'scaffolder' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'scaffolder' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'scaffolder' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'techdocs' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'techdocs' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'techdocs' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'auth' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'auth' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'auth' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'catalog' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'catalog' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'catalog' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'permission' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'permission' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'permission' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'search' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'search' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'search' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'kubernetes' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'kubernetes' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'kubernetes' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'notifications' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'notifications' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'notifications' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'signals' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'signals' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'signals' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n  Plugin 'events' startup failed; caused by Error: Failed to instantiate service 'core.httpRouter' for 'events' because the factory function threw an error, Error: Failed to instantiate service 'core.auth' for 'events' because the factory function threw an error, Error: Missing required config value at 'backend.auth.externalAccess[0].options.token' in 'app-config.yaml'\n    at #doStart (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:354:13)\n    at async BackendInitializer.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackendInitializer.cjs.js:180:12)\n    at async BackstageBackend.start (/app/node_modules/@backstage/backend-app-api/dist/wiring/BackstageBackend.cjs.js:19:12)",
  "type": "unhandledRejection"
}
```
