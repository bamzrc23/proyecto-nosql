import React from "react";
import { useNavigate } from "react-router-dom";

import *as carService from '../../../services/carService';
import { carTypes, fuels, transmissions } from '../carConstants';
import InputFormComponent from "../../Common/InputFormComponent/InputFormComponent";
import CarDataCheckboxesUpdate from "../CarDataCheckboxesUpdate";
import CarValidations from "../../Common/Validations/CarValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import CheckboxFormComponent from "../../Common/CheckboxFormComponent/CheckboxFormComponent";

const Create = () => {
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
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
    } = CarValidations();

    const onCarCreate = (e) => {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));
        let updatedCarData = CarDataCheckboxesUpdate(carData);
        carService.create(updatedCarData)
            .then(result => {
                addNotification(result.message, types.success)
                navigate('/mobile/car/all');
            })
            .catch(err => {
                console.log(err.message);
                addNotification(err.message, types.error)
            })
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/fondo1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onCarCreate} method="POST">
                        <h2>Agregar un nuevo auto</h2>
                        <InputFormComponent
                            form="form-group"
                            title="Imagen"
                            type="text"
                            name="image"
                            placeholder="https://car-image.bg"
                            onBlur={imageChangeHandler}
                            errors={errors.image}
                        />
                        <InputFormComponent
                            form="form-group"
                            title="Descripción"
                            type="text"
                            name="description"
                            placeholder="Say something about car..."
                            onBlur={descriptionChangeHandler}
                            errors={errors.description}
                        />
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Marca"
                                type="text"
                                name="make"
                                placeholder="Audi, Porshe,..."
                                onBlur={makeChangeHandler}
                                errors={errors.make}
                            />
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Modelo"
                                type="text"
                                name="model"
                                placeholder="model of the car"
                                onBlur={modelChangeHandler}
                                errors={errors.model}
                            />
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="type" className="label">Tipo</label>
                                <select name="type" id="type" className="form-control">
                                    {carTypes.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="fuel" className="label">Combustible</label>
                                <select name="fuel" id="fuel" className="form-control">
                                    {fuels.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="transmission" className="label">Transmisión</label>
                                <select name="transmission" id="transmission" className="form-control">
                                    {transmissions.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Precio"
                                type="number"
                                name="price"
                                placeholder="115"
                                onBlur={priceChangeHandler}
                                errors={errors.price}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Año"
                                type="number"
                                name="year"
                                placeholder="2015"
                                onBlur={yearChangeHandler}
                                errors={errors.year}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Km"
                                type="number"
                                name="mileage"
                                placeholder="10000"
                                onBlur={mileageChangeHandler}
                                errors={errors.mileage}
                            />
                        </div>
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Asientos"
                                type="number"
                                name="seats"
                                placeholder="4"
                                onBlur={seatsChangeHandler}
                                errors={errors.seats}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Puertas"
                                type="number"
                                name="doors"
                                placeholder="2"
                                onBlur={doorsChangeHandler}
                                errors={errors.doors}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Equipaje"
                                type="number"
                                name="luggage"
                                placeholder="1"
                                onBlur={luggageChangeHandler}
                                errors={errors.luggage}
                            />
                        </div>
                        <div className="d-flex">
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Cierre centralizado"
                                name="remoteCentralLocking"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Entrada de audio"
                                name="audioInput"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Asiento para niños"
                                name="childSeat"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Musica"
                                name="music"
                                value={1}
                            />
                        </div>
                        <div className="d-flex">
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Board Computer"
                                name="onboardComputer"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Aire acondicionado"
                                name="airConditioner"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Bluetooth"
                                name="bluetooth"
                                value={1}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Gps"
                                name="gps"
                                value={1}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create A Car Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;