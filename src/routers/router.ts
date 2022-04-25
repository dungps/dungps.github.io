import { IRoute } from './types';
import { HomeView } from 'views';
import { DefaultLayout } from 'layouts';

export default [
    {
        path: '/',
        component: HomeView,
        layout: DefaultLayout,
        exact: true,
    },
] as Array<IRoute>;