import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFetchRecipes } from '../../../../../../hooks/useFetchRecipes';
import styles from './adminRecipesList.module.scss';
import { deleteRecipe as deleteR } from '../../../../../../apis/recipe';

export default function AdminRecipesList() {
    const [[recipes, setRecipes]] = useFetchRecipes();

    async function deleteRecip(_id) {
        await deleteR(_id);
        setRecipes(recipes.filter((r) => r._id !== _id));
    }

    return (
        <ul className={styles.list}>
            {recipes.length ? (
                recipes.map((r) => (
                    <li className="d-flex align-item-center p-20 " key={r._id}>
                        <span className="flex-fill">{r.title}</span>
                        <NavLink to={`../edit/${r._id}`}>
                            <button className="btn btn-primary mr-20">
                                Éditer
                            </button>
                        </NavLink>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteRecip(r._id)}
                        >
                            Supprimer la recette
                        </button>
                    </li>
                ))
            ) : (
                <h2 className="d-flex align-item-center justify-content-center">
                    Aucune recette disponible...
                </h2>
            )}
        </ul>
    );
}
