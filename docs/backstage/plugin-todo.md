# plugin-todo   

```bash
yarn --cwd packages/app add @backstage-community/plugin-todo

```


```typescript   
// In packages/app/src/components/catalog/EntityPage.tsx
import { EntityTodoContent } from '@backstage-community/plugin-todo';
// Adds the Todo tab to the service entity page
const serviceEntityPage = (
  <EntityLayout>
    {/* other tabs... */}
    <EntityLayout.Route path="/todo" title="Todo">
      <EntityTodoContent />
    </EntityLayout.Route>
  </EntityLayout>
);
```