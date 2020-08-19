import {useState} from 'react';

export default function (initialVal){
    const [value, setValue] = useState(initialVal);
    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    const reset = function () {
        setValue("");
    }

    return [value, handleChange, reset];
}
