import React from 'react';
import styles from './signup.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUser } from '../../../../apis/users';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        name: yup
            .string()
            .required('Le nom est obligatoire')
            .min(3, 'Le nom doit faire au moins 3 caractères'),
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
        name: '',
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
            const user = await createUser(credentials);
            console.log(user);
            navigate('/login');
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
                <h2 className="mb-20">Inscrivez-vous 👋</h2>
                <div className="d-flex flex-column mb-20">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" {...register('name')} />
                    {errors.name && (
                        <span className="text-danger">
                            {errors.name.message}
                        </span>
                    )}
                </div>
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
                        Sauvegarder
                    </button>
                </div>
            </form>
        </div>
    );
}
