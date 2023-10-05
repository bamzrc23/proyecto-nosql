import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import *as carService from '../../../services/carService';
import { towns } from '../carConstants';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

const RentACar = () => {
    const { addNotification } = useNotificationContext();
    const { carId } = useParams();
    const [dateTo, setDateFrom] = useState(null);
    const [dateFrom, setDateTo] = useState(null);
    const navigate = useNavigate();

    const onRentACar = (e) => {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));

        carService.rent(carData, carId)
            .then((result) => {
                addNotification(result.message, types.success)
                navigate(`/mobile/car/${carId}`);
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/fondo1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onRentACar} method="PATCH">
                        <h2>Haz tu viaje</h2>
                        <div className="form-group mr-2">
                            <label htmlFor="pickUpLocation" className="label">Recogida en</label>
                            <select name="pickUpLocation" id="pickUpLocation" className="form-control">
                                {towns.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                        <div className="form-group mr-2">
                            <label htmlFor="dropOffLocation" className="label">Regreso en</label>
                            <select name="dropOffLocation" id="dropOffLocation" className="form-control">
                                {towns.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="dateFrom" className="label">FECHA DE</label>
                                <ReactDatePicker
                                    className="form-control"
                                    selected={dateFrom}
                                    onChange={date => setDateTo(date)}
                                    name="dateFrom"
                                    dateFormat='yyyy-MM-dd'
                                    minDate={new Date()}
                                    placeholderText="2022-01-01"
                                    isClearable
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateFrom" className="label">FECHA HASTA</label>
                                <ReactDatePicker
                                    className="form-control"
                                    selected={dateTo}
                                    onChange={date => setDateFrom(date)}
                                    name="dateTo"
                                    dateFormat='yyyy-MM-dd'
                                    minDate={new Date()}
                                    placeholderText="2022-01-01"
                                    isClearable
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RentACar;