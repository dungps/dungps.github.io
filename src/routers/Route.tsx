import React from 'react';
import { IRoute } from './types';

const AppRoute = ({ component: Component, layout: Layout, ...rest }: IRoute) => {
    if (Layout && Component) {
        return (
            <Layout {...rest}>
                <Component {...rest} />
            </Layout>
        )
    }

    if (Component) {
        return <Component {...rest} />
    }

    return <h1>Component not found</h1>
};

export default AppRoute;