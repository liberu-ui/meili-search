import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./meilisearch', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'meilisearch/',
    component: Router,
    meta: {
        breadcrumb: 'meilisearch',
    },
    children: routes,
};
