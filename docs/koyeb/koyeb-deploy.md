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
