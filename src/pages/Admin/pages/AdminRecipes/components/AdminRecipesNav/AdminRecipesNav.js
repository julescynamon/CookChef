import React from 'react';
import styles from './adminRecipesNav.module.scss';
import { NavLink } from 'react-router-dom';

export default function AdminRecipesNav() {
    return (
        <ul className={`${styles.list} d-flex mb-20`}>
            <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="list"
            >
                Liste des recettes
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="new"
            >
                Ajouter une recette
            </NavLink>
        </ul>
    );
}
