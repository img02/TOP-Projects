// FavouriteInput.js

import React from "react";

const FavouriteInput = ({ onChange: onInputChange, id }) => {
    const inputHandler = (event) => onInputChange(event.target.value);

    return (
        <label htmlFor={id}>
            What is your favorite wild animal?
            <input id={id} onChange={inputHandler} />
        </label>
    );
};

export default FavouriteInput;
