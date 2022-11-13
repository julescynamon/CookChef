import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login.module.scss';
import { login } from '../../../../apis/auth';

export default function Login() {
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("l'email doit eêtres valide")
            .required("L'email est obligatoire"),
        password: yup
            .string()
            .required('Le mot de passe est obligatoire')
            .min(6, 'Le mot de passe doit faire au moins 6 caractères'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
    } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = handleSubmit(async (credentials) => {
        console.log(credentials);
        try {
            clearErrors();
            const user = login(credentials);
            console.log(user);
        } catch (message) {
            setError('generic', { type: 'generic', message });
        }
    });

    return (
        <div className="block flex-fill d-flex flex-column align-items-center justify-content-center">
            <form
                onSubmit={onSubmit}
                className={`d-flex flex-column card p-20 ${styles.signupForm}`}
            >
                <h2 className="mb-20">Connectez-vous 👋</h2>
                <div className="d-flex flex-column mb-20">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" {...register('email')} />
                    {errors.email && (
                        <span className="text-danger">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="d-flex flex-column mb-20">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        {...register('password')}
                    />
                    {errors.password && (
                        <span className="text-danger">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                {errors.generic && (
                    <span className="text-danger">
                        {errors.generic.message}
                    </span>
                )}
                <div>
                    <button disabled={isSubmitting} className="btn btn-primary">
                        Connexion
                    </button>
                </div>
            </form>
        </div>
    );
}
