import React from "react";
import { Alert } from "react-bootstrap";

const InputFormComponent = ({ form, title, type, name, placeholder, defaultValue, onBlur, errors }) => {
    return (
        <>
            <div className={form}>
                <label htmlFor={name} className="label">{title}</label>
                <input type={type} className="form-control" name={name} defaultValue={defaultValue} placeholder={placeholder} onBlur={onBlur} />
                {errors ? <Alert variant="danger" show={errors}>{errors}</Alert> : null}
            </div>

        </>
    )
}

export default InputFormComponent;