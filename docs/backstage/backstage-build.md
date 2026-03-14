# backstage-build

```bash
npm install --force --verbose
```

## package.json

```json
{
  "name": "devx",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": "22 || 24"
  },
  "scripts": {
    "start": "backstage-cli repo start",
    "build:backend": "yarn workspace backend build",
    "build:all": "backstage-cli repo build --all",
    "build-image": "yarn workspace backend build-image",
    "tsc": "tsc"
  },
  "workspaces": {
    "packages": ["packages/*", "plugins/*"]
  }
}
```
