import React, {useState} from "react";

const useForm=(initalValues, callback) => {
    const [values, setValues]=useState(initalValues);

    const handleSubmit=(event) => {
        if(event){
            event.preventDefault();
            callback();
        }
    };

    const handleChange=(event) => {
        event.persist();
        setValues((values) => ({...values, [event.target.name] : event.target.value}))
    }

    return[
        values,
        handleSubmit,
        handleChange
    ]
}

export default useForm;