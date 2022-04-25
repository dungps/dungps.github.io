import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import routers from './router';
import { IRoute } from './types';
import AppRoute from './Route';

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                {routers.map(({ layout: Layout, children, redirect, ...rest }: IRoute, key: number) => {
                    if (redirect) {
                        return <Navigate to={redirect} state={{ from: rest.path }} replace />
                    }

                    if (children && Layout) {
                        return (
                            <Layout>
                                <Routes>
                                    {children.map((route: IRoute, index: number) => <Route path={route.path} element={<AppRoute {...route} />} />)}
                                </Routes>
                            </Layout>
                        )
                    }

                    return <Route path={rest.path} element={<AppRoute {...rest} layout={Layout} />} />
                })}
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;