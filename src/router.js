import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Homepage = lazy(() => {
    return import('./pages/Homepage/Homepage');
});

const Admin = lazy(() => {
    return import('./pages/Admin/Admin');
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
            },
        ],
    },
]);
