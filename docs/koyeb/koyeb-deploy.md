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
