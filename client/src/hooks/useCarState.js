import { useState, useEffect } from "react";

import *as carService from '../services/carService';

const useCarState = (carId) => {
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(carId)
            .then(carResult => {
                setCar(carResult);
            });
    }, [carId]);

    return[
        car,
        setCar
    ]
}

export default useCarState;