/**
 * This module exports a router configuration for the '/integrations' path.
 * It imports routes from the './integrations' directory and sets them as children routes.
 */

import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Imports all files with the .ts extension from the './integrations' directory.
 * @param {RequireContext} requireContext - The require context for the directory.
 * @returns {Array<Route>} The imported routes.
 */
const importRoutes = (requireContext: RequireContext): Array<Route> => {
  return routeImporter(requireContext);
};

/**
 * The router configuration for the '/integrations' path.
 * @type {RouteConfig}
 */
const integrationsRouter: RouteConfig = {
  path: '/integrations',
  children: importRoutes(require.context('./integrations', false, /.*\.ts$/))
};

export default integrationsRouter;