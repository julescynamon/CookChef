import React from 'react';
import styles from './signup.module.scss';

export default function Signup() {
    return (
        <div className="block flex-fill d-flex flex-column align-items-center justify-content-center">
            <form
                className={`d-flex flex-column card p-20 ${styles.signupForm}`}
            >
                <h2 className="mb-20">Inscrivez-vous 👋</h2>
                <div className="d-flex flex-column mb-20">
                    <label>Nom</label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column mb-20">
                    <label>Prénom</label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column mb-20">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column mb-20">
                    <label>Mot de passe</label>
                    <input type="text" />
                </div>

                <div>
                    <button className="btn btn-primary">Sauvegarder</button>
                </div>
            </form>
        </div>
    );
}
