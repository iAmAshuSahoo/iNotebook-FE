import { useState } from 'react';
import AlertContext from './alertContext';

const AlertState = (props) => {
    const [alert, setAlert] = useState({
        show: false,
        type: '',
        message: ''
    })
    const showAlert = (type, message) => {
        console.log("Hi Alert")
        const newObj = {...alert}
        newObj.show = true;
        newObj.type = type;
        newObj.message = message;
        setAlert(newObj);  
        setTimeout(setAlert, 2000, {
            show: false,
            type: '',
            message: ''
        });
    }
    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState