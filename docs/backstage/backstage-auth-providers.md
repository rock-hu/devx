# backstage-auth-providers

```yaml
auth:
  # see https://backstage.io/docs/auth/ to learn about auth providers
  # providers:
  #   # See https://backstage.io/docs/auth/guest/provider
  #   guest: {}
  # Auth provider registered for 'github' is misconfigured. This could mean the configs under auth.providers.github are missing or the environment variables used are not defined.
  environment: development
  providers:
    github:
      development:
        clientId: ${GITHUB_CLIENT_ID_DEV}
        clientSecret: ${GITHUB_CLIENT_SECRET_DEV}
        sessionDuration: { hours: 24 }
        ## uncomment if using GitHub Enterprise
        # enterpriseInstanceUrl: ${AUTH_GITHUB_ENTERPRISE_INSTANCE_URL}
        ## uncomment to set lifespan of user session
        # sessionDuration: { hours: 24 } # supports `ms` library format (e.g. '24h', '2 days'), ISO duration, "human duration" as used in code
        signIn:
          resolvers:
            # See https://backstage.io/docs/auth/github/provider#resolvers for more resolvers
            - resolver: usernameMatchingUserEntityName
```

> [!WARNING]
> Failed to sign-in, unable to resolve user identity. Please verify that your catalog contains the expected User entities that would match your configured sign-in resolver.

```
GitHub
Sign-in to allow DevX - Scaffolded Backstage access to GitHub APIs and identities.
Failed to sign-in, unable to resolve user identity. Please verify that your catalog contains the expected User entities that would match your configured sign-in resolver.
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]  
> `usernameMatchingUserEntityName` - will match the GitHub user name with the `metadata.name` value of a User in the Catalog
> `emailMatchingUserEntityProfileEmail` user entity with matching `spec.profile.email`

> [!IMPORTANT]
> Note that environment variables such as AUTH_OAUTH2_CLIENT_ID must be set and will NOT be picked up from .env files. You can use the yarn backstage-cli config:print --lax command to print your local configuration.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
