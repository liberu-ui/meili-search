```typescript
/**
 * Type definition for the SettingsIndex component.
 * Represents a functional component that renders the SettingsIndex page.
 */
type SettingsIndexComponent = () => Promise<typeof import('../../../pages/integrations/settings/Index')>;

/**
 * Type definition for the meta property of the route configuration.
 * Represents additional data for the route.
 */
type RouteMeta = {
  breadcrumb: string;
  title: string;
};

/**
 * Type definition for the route configuration.
 * Represents a single route with its corresponding component and meta data.
 */
type RouteConfig = {
  name: string;
  path: string;
  component: SettingsIndexComponent;
  meta: RouteMeta;
};

/**
 * The route configuration for the integrations.meilisearch.settings.index route.
 * Represents the path, component, and meta data of the route.
 */
const integrationsMeilisearchSettings: RouteConfig = {
  name: 'integrations.meilisearch.settings.index',
  path: 'settings',
  component: () => import('../../../pages/integrations/settings/Index'),
  meta: {
    breadcrumb: 'settings',
    title: 'Settings',
  },
};

export default integrationsMeilisearchSettings;
```
