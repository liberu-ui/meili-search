import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./meilisearch', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'meilisearch/',
    component: Router,
    meta: {
        breadcrumb: 'meilisearch',
    },
    children: routes,
};
