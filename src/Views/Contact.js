import React from 'react'
import OnemoreComponent from '../components/OnemoreComponent'

const Contact = () => {
    const onClick = () => {
        alert('this is a function pass through a prop')
    }
    return (
        // you can even pass a function to component a prop
        <>
            <OnemoreComponent myfunction={onClick} />
        </>
    )
}

export default Contact