# plugin-github-actions 

```bash
yarn --cwd packages/app add @backstage-community/plugin-github-actions
```


```typescript
// In packages/app/src/components/catalog/EntityPage.tsx
import {
  EntityGithubActionsContent,
  isGithubActionsAvailable,
} from '@backstage-community/plugin-github-actions';

// You can add the tab to any number of pages, the service page is shown as an
// example here
const serviceEntityPage = (
  <EntityLayout>
    {/* other tabs... */}
    <EntityLayout.Route path="/github-actions" title="GitHub Actions" if={isGithubActionsAvailable}>
      <EntityGithubActionsContent />
    </EntityLayout.Route>
```