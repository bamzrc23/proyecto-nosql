import { useState } from "react";
import validator from 'validator';

const AuthValidations = () => {
    const [errors, setErrors] = useState(
        {
            name: false,
            email: false,
            password: false,
            rePassword: false
        });

    const emailChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isEmail(value)) {
            setErrors(state => ({ ...state, email: 'Su correo electrónico debe ser un correo electrónico válido!' }));
        } else {
            setErrors(state => ({ ...state, email: false }));
        }
    }

    const nameChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2 || value.length > 20) {
            setErrors(state => ({ ...state, name: 'Tu nombre debe tener entre 2 y 20 caracteres!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const passwordChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isStrongPassword(value)) {
            setErrors(state => ({ ...state, password: 'La contraseña debe ser más segura! (mínimo: 8 caracteres, mínimo 1 letra minuscula, mínimo 1 letra mayuscula, mínimo 1 número y mínimo 1 símbolo' }));
        } else {
            setErrors(state => ({ ...state, password: false }));
        }
    }

    const rePasswordChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isStrongPassword(value)) {
            setErrors(state => ({ ...state, rePassword: 'Repetir contraseña debe ser más segura!!! (mínimo: 8 caracteres, mínimo 1 letra minuscula, mínimo 1 letra mayuscula, mínimo 1 número y mínimo 1 símbolo' }));
        } else {
            setErrors(state => ({ ...state, rePassword: false }));
        }
    }

    return {
        nameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        rePasswordChangeHandler,
        errors
    }
}

export default AuthValidations;