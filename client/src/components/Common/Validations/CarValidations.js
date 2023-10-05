import { useState } from "react";
import validator from 'validator';

const CarValidations = () => {
    const [errors, setErrors] = useState(
        {
            description: false,
            image: false,
            make: false,
            model: false,
            price: false,
            year: false,
            mileage: false,
            seats: false,
            doors: false,
            luggage: false
        });

    const imageChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isURL(value)) {
            setErrors(state => ({ ...state, image: 'Tu imagen debe ser una URL válida!' }));
        } else {
            setErrors(state => ({ ...state, image: false }));
        }
    }

    const descriptionChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length > 300) {
            setErrors(state => ({ ...state, description: 'Your description should be maximum 300 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const makeChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, make: 'Tu marca debe tener un mínimo de 2 caracteres!' }));
        } else {
            setErrors(state => ({ ...state, make: false }));
        }
    }

    const modelChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, model: 'Tu modelo debe tener un mínimo de 1 carácter!' }));
        } else {
            setErrors(state => ({ ...state, model: false }));
        }
    }

    const priceChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000 || value < 1) {
            setErrors(state => ({ ...state, price: 'Su precio debe estar entre 1 y 1000!' }));
        } else {
            setErrors(state => ({ ...state, price: false }));
        }
    }

    const yearChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 2021 || value < 1930) {
            setErrors(state => ({ ...state, year: 'Tu año debería ser entre 1930 y 2023!' }));
        } else {
            setErrors(state => ({ ...state, year: false }));
        }
    }

    const mileageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000000 || value < 1) {
            setErrors(state => ({ ...state, mileage: 'Su kilometraje debe estar entre 1 y 1000000!' }));
        } else {
            setErrors(state => ({ ...state, mileage: false }));
        }
    }

    const seatsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 9 || value < 1) {
            setErrors(state => ({ ...state, seats: 'Tus asientos deben estar entre el 1 y el 9!' }));
        } else {
            setErrors(state => ({ ...state, seats: false }));
        }
    }

    const doorsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 5 || value < 2) {
            setErrors(state => ({ ...state, doors: 'Tus puertas deben estar entre 2 y 5!' }));
        } else {
            setErrors(state => ({ ...state, doors: false }));
        }
    }

    const luggageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 6 || value < 0) {
            setErrors(state => ({ ...state, luggage: 'Your luggage should be between 0 and 6!' }));
        } else {
            setErrors(state => ({ ...state, luggage: false }));
        }
    }

    return {
        imageChangeHandler,
        descriptionChangeHandler,
        makeChangeHandler,
        yearChangeHandler,
        doorsChangeHandler,
        modelChangeHandler,
        priceChangeHandler,
        seatsChangeHandler,
        luggageChangeHandler,
        mileageChangeHandler,
        errors
    }
}

export default CarValidations;