import React from 'react';
import styles from './adminNav.module.scss';
import { NavLink } from 'react-router-dom';

export default function AdminNav() {
    return (
        <ul className={`${styles.list} d-flex flex-column p-20 mr-20`}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.listLinkActive : ''
                }
                to="recipes"
            >
                Recettes
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.listLinkActive : ''
                }
                to="users"
            >
                Utilisateurs
            </NavLink>
        </ul>
    );
}
