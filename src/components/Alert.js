import React from 'react'

function Alert(props) {
    const {type, message} = props.alert;
    const capitalise = (val) => {
        if (val === "danger") {
            val = "error";
        }
        return val[0].toUpperCase() + val.slice(1);
    }
    return (
        <>
            {props.alert &&
            <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(type)}:</strong> {message}
            </div>}
        </>
    )
}

export default Alert
