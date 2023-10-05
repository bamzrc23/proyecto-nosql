import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import * as carService from "../../../services/carService";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";

const CarTrip = ({
    car
}) => {
    const navigate = useNavigate();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { addNotification } = useNotificationContext();

    const deleteHandler = async (e) => {
        e.preventDefault();

        await carService.deleteSavedTrip(car._id, car.tripId)
            .then(result => {
                addNotification(result.message, types.success)
                navigate('/mobile/car/allSavedTrips');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true);
    }

    return (
        <div className="col-md-4">
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <div className="car-wrap rounded">
                <div className="img rounded d-flex align-items-end">
                    <img className="img rounded d-flex align-items-end" src={car.image} alt="imageUrl" />
                </div>
                <div className="text">
                    <h2 className="mb-0"><Link to={`/details/${car._id}`}>{car.make} {car.model}</Link></h2>
                    <div className="d-flex mb-3">
                        <p className="price ml-auto">{car.savedDays} <span>/dias guardados</span></p>
                    </div>
                    <div className="d-flex mb-3">
                        <p className="price ml-auto">{car.price}$ <span>/dia</span></p>
                        <p className="price ml-auto">{car.fullPrice}$ <span>/Precio final</span></p>
                    </div>
                    <div className="d-flex mb-3">
                        <p className="price ml-auto">De: {car.pickUpLocation} </p>
                        <p className="price ml-auto">  {car.dateFrom}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <p className="price ml-auto">A: {car.dropOffLocation} </p>
                        <p className="price ml-auto">{car.dateTo}</p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                        <Link to={`/mobile/car/${car._id}/${car.tripId}/delete`} className="btn btn-secondary py-2 ml-1" onClick={deleteClickHandler}>Delete</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CarTrip;