# backstage-cli

## yarn backstage-cli --help

```bash
yarn backstage-cli --help
Usage: backstage-cli [options] [command]

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  package [command]  package
  repo [command]     repo
  build-workspace    Builds a temporary dist workspace from the provided packages
  config:docs        Browse the configuration reference documentation
  config [command]   config
  config:print       Print the app configuration for the current package
  config:check       Validate that the given configuration loads and matches schema
  config:schema      Print the JSON schema for the given configuration
  create-github-app  Create new GitHub App in your organization.
  info               Show helpful information for debugging and reporting bugs
  versions:migrate   Migrate any plugins that have been moved to the @backstage-community
                     namespace automatically
  versions:bump      Bump Backstage packages to the latest versions
  migrate [command]  migrate
  new                Open up an interactive guide to creating new things in your app
  help [command]     display help for command
```

## yarn backstage-cli info

```bash
yarn backstage-cli info
OS:   Linux 6.17.0-14-generic - linux/x64
node: v24.1.0
yarn: 4.4.1
cli:  0.35.4 (installed)
backstage:  1.48.0

Dependencies:
  @backstage/app-defaults                                          1.7.5
  @backstage/backend-app-api                                       1.5.0
  @backstage/backend-defaults                                      0.15.2
  @backstage/backend-dev-utils                                     0.1.7
  @backstage/backend-openapi-utils                                 0.6.6
  @backstage/backend-plugin-api                                    1.7.0
  @backstage/catalog-client                                        1.13.0
  @backstage/catalog-model                                         1.7.6
  @backstage/cli                                                   0.35.4
  @backstage/cli-common                                            0.1.18
  @backstage/cli-node                                              0.2.18
  @backstage/config                                                1.3.6
  @backstage/config-loader                                         1.10.8
  @backstage/core-app-api                                          1.19.5
  @backstage/core-compat-api                                       0.5.8
  @backstage/core-components                                       0.18.7
  @backstage/core-plugin-api                                       1.12.3
  @backstage/e2e-test-utils                                        0.1.2
  @backstage/errors                                                1.2.7
  @backstage/eslint-plugin                                         0.2.1
  @backstage/filter-predicates                                     0.1.0
  @backstage/frontend-plugin-api                                   0.14.1
  @backstage/integration                                           1.20.1
  @backstage/integration-aws-node                                  0.1.20
  @backstage/integration-react                                     1.2.15
  @backstage/module-federation-common                              0.1.1
  @backstage/plugin-api-docs                                       0.13.4
  @backstage/plugin-app-backend                                    0.5.11
  @backstage/plugin-app-node                                       0.1.42
  @backstage/plugin-app-react                                      0.2.0
  @backstage/plugin-auth-backend                                   0.27.1
  @backstage/plugin-auth-backend-module-github-provider            0.5.0
  @backstage/plugin-auth-backend-module-guest-provider             0.2.16
  @backstage/plugin-auth-node                                      0.6.13
  @backstage/plugin-auth-react                                     0.1.24
  @backstage/plugin-bitbucket-cloud-common                         0.3.7
  @backstage/plugin-catalog                                        1.33.1
  @backstage/plugin-catalog-backend                                3.4.0
  @backstage/plugin-catalog-backend-module-logs                    0.1.19
  @backstage/plugin-catalog-backend-module-scaffolder-entity-model 0.2.17
  @backstage/plugin-catalog-common                                 1.1.8
  @backstage/plugin-catalog-graph                                  0.5.7
  @backstage/plugin-catalog-import                                 0.13.10
  @backstage/plugin-catalog-node                                   2.0.0
  @backstage/plugin-catalog-react                                  2.0.0
  @backstage/plugin-events-node                                    0.4.19
  @backstage/plugin-kubernetes                                     0.12.16
  @backstage/plugin-kubernetes-backend                             0.21.1
  @backstage/plugin-kubernetes-common                              0.9.10
  @backstage/plugin-kubernetes-node                                0.4.1
  @backstage/plugin-kubernetes-react                               0.5.16
  @backstage/plugin-notifications                                  0.5.14
  @backstage/plugin-notifications-backend                          0.6.2
  @backstage/plugin-notifications-common                           0.2.1
  @backstage/plugin-notifications-node                             0.2.23
  @backstage/plugin-org                                            0.6.49
  @backstage/plugin-permission-backend                             0.7.9
  @backstage/plugin-permission-backend-module-allow-all-policy     0.2.16
  @backstage/plugin-permission-common                              0.9.6
  @backstage/plugin-permission-node                                0.10.10
  @backstage/plugin-permission-react                               0.4.40
  @backstage/plugin-proxy-backend                                  0.6.10
  @backstage/plugin-proxy-node                                     0.1.12
  @backstage/plugin-scaffolder                                     1.35.4
  @backstage/plugin-scaffolder-backend                             3.1.5
  @backstage/plugin-scaffolder-backend-module-azure                0.2.18
  @backstage/plugin-scaffolder-backend-module-bitbucket            0.3.19
  @backstage/plugin-scaffolder-backend-module-bitbucket-cloud      0.3.3
  @backstage/plugin-scaffolder-backend-module-bitbucket-server     0.2.18
  @backstage/plugin-scaffolder-backend-module-gerrit               0.2.18
  @backstage/plugin-scaffolder-backend-module-gitea                0.2.18
  @backstage/plugin-scaffolder-backend-module-github               0.9.6
  @backstage/plugin-scaffolder-backend-module-gitlab               0.11.3
  @backstage/plugin-scaffolder-backend-module-notifications        0.1.19
  @backstage/plugin-scaffolder-common                              1.7.6
  @backstage/plugin-scaffolder-node                                0.12.5
  @backstage/plugin-scaffolder-react                               1.19.7
  @backstage/plugin-search                                         1.6.1
  @backstage/plugin-search-backend                                 2.0.12
  @backstage/plugin-search-backend-module-catalog                  0.3.12
  @backstage/plugin-search-backend-module-pg                       0.5.52
  @backstage/plugin-search-backend-module-techdocs                 0.4.11
  @backstage/plugin-search-backend-node                            1.4.1
  @backstage/plugin-search-common                                  1.2.22
  @backstage/plugin-search-react                                   1.10.4
  @backstage/plugin-signals                                        0.0.28
  @backstage/plugin-signals-backend                                0.3.12
  @backstage/plugin-signals-node                                   0.1.28
  @backstage/plugin-signals-react                                  0.0.19
  @backstage/plugin-techdocs                                       1.17.0
  @backstage/plugin-techdocs-backend                               2.1.5
  @backstage/plugin-techdocs-common                                0.1.1
  @backstage/plugin-techdocs-module-addons-contrib                 1.1.33
  @backstage/plugin-techdocs-node                                  1.14.3
  @backstage/plugin-techdocs-react                                 1.3.8
  @backstage/plugin-user-settings                                  0.9.0
  @backstage/plugin-user-settings-common                           0.1.0
  @backstage/release-manifests                                     0.0.13
  @backstage/test-utils                                            1.7.15
  @backstage/theme                                                 0.7.2
  @backstage/types                                                 1.2.2
  @backstage/ui                                                    0.12.0
  @backstage/version-bridge                                        1.0.12

Local:
  app     0.0.0
  backend 0.0.0
```

## yarn backstage-cli config:check

```bash
yarn backstage-cli config:check
Loaded config from app-config.yaml
```

## yarn backstage-cli config:print

```yaml
# yarn backstage-cli config:print
# Loaded config from app-config.yaml
app:
  title: Scaffolded Backstage App
  baseUrl: http://localhost:3000
organization:
  name: My Company
backend:
  baseUrl: http://localhost:7007
  listen:
    port: 7007
  csp:
    connect-src:
      - "'self'"
      - 'http:'
      - 'https:'
  cors:
    origin: http://localhost:3000
    methods:
      - GET
      - HEAD
      - PATCH
      - POST
      - PUT
      - DELETE
    credentials: true
  database:
    client: better-sqlite3
    connection: <secret>
integrations:
  github:
    - host: github.com
techdocs:
  builder: local
  generator:
    runIn: docker
  publisher:
    type: local
auth:
  providers:
    guest: {}
catalog:
  import:
    entityFilename: catalog-info.yaml
    pullRequestBranchName: backstage-integration
  rules:
    - allow:
        - Component
        - System
        - API
        - Resource
        - Location
  locations:
    - type: file
      target: ../../examples/entities.yaml
    - type: file
      target: ../../examples/template/template.yaml
      rules:
        - allow:
            - Template
    - type: file
      target: ../../examples/org.yaml
      rules:
        - allow:
            - User
            - Group
permission:
  enabled: true
```


## yarn backstage-cli config:check --strict 

```
yarn backstage-cli config:check --strict
Loaded config from app-config.yaml

Error: Configuration does not match schema

  Config must have required property 'lighthouse' { missingProperty=lighthouse } at 
  Config must NOT have additional properties { additionalProperty=/circleci/api } at /integrations
```