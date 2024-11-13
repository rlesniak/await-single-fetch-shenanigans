import {
    layout,
    route,
    prefix,
    index,
    type RouteConfig,
} from '@remix-run/route-config';

export const routes: RouteConfig = [
    prefix('cool-stuff', [index('path/to/route.tsx')]),
];
