import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AdminRecipesNav from './components/AdminRecipesNav/AdminRecipesNav';

export default function Adminrecipes() {
    return (
        <div className="d-flex flex-column flex-fill">
            <h4 className="mb-20">Gestion des recettes</h4>
            <div className="flex-fill d-flex flex-column">
                <AdminRecipesNav />
                <div className="d-flex flex-column flex-fill">
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
