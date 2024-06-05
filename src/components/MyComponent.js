import React from 'react'

// component name must be capital also teh file name
export const MyComponent = ({ firstName, lastName, address }) => {
    return (
        <>
            <h1>Introduction</h1>
            <p>First Name :  {firstName} </p>
            <p>Last Name : {lastName}</p>
            <p>Address : {address}</p>

        </>
    )
}
