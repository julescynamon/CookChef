import React from 'react';
import styles from './profile.module.scss';

export default function Profile() {
    return (
        <div className="block flex-fill d-flex flex-column align-items-center justify-content-center">
            <div className={`${styles.blockProfile} card p-20`}>
                <h1>Profile</h1>
                <ul>
                    <li>Nom: </li>
                    <li>Email:</li>
                </ul>
            </div>
        </div>
    );
}
