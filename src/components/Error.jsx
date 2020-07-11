import React from 'react'

const Error = ({message}) => {
    return ( 
    <p className="aller alert-danger error">{message}</p>
    );
}

export default Error;