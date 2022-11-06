import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';

const Homepage = lazy(() => {
    return import('./pages/Homepage/Homepage');
});

const Admin = lazy(() => {
    return import('./pages/Admin/Admin');
});

const AdminRecipes = lazy(() => {
    return import('./pages/Admin/pages/AdminRecipes');
});

const AdminUsers = lazy(() => {
    return import('./pages/Admin/pages/AdminUsers');
});

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        path: 'recipes',
                        element: <AdminRecipes />,
                    },
                    {
                        path: 'users',
                        element: <AdminUsers />,
                    },
                    {
                        index: true,
                        loader: async () => redirect('recipes'),
                    },
                ],
            },
        ],
    },
]);
