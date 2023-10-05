import React from "react";

const CheckboxFormComponent = ({ form, title, name, defaultChecked, value }) => {
    const createWithValue = (
        <>
            <div className={form}>
                <label htmlFor={name} className="label">{title}</label>
                <input type="checkbox" className="form-control-checkbox" name={name} value={value} />
            </div>
        </>
    )

    const editWithoutValue = (
        <>
            <div className={form}>
                <label htmlFor={name} className="label">{title}</label>
                <input type="checkbox" className="form-control-checkbox" name={name} defaultChecked={defaultChecked} />
            </div>
        </>
    )
    return (
        value ? createWithValue : editWithoutValue
    )
}

export default CheckboxFormComponent;