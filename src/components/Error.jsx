import React from 'react';
import Proptypes from 'prop-types';

export const Error = ({ mensaje }) => (

    <p className="alert alert-danger error">{ mensaje }</p>

);

Error.propTypes = {
    mensaje: Proptypes.string.isRequired
}