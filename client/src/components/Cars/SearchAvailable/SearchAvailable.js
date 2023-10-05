import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import *as carService from '../../../services/carService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const SearchAvailable = () => {
    const [dateTo, setDateFrom] = useState(null);
    const [dateFrom, setDateTo] = useState(null);
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const getAvailableCars = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let dateFrom = formData.get('dateFrom');
        let dateTo = formData.get('dateTo');

        carService.available({ dateFrom, dateTo })
            .then((result) => {
                console.log(result)
                navigate(`/mobile/car/all`, { state: { cars: result } });
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
                    <form className="request-form bg-primary" onSubmit={getAvailableCars} method="POST">
                        <h2>Buscar autos ahora</h2>
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="dateFrom" className="label">Fecha de</label>
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
                                <label htmlFor="dateFrom" className="label">Fecha hasta</label>
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
                            <input type="submit" value="Buscar todos los autos ahora" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchAvailable;