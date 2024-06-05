import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{ margin: 10 }}>
                <Link to="/home" style={{ padding: 5 }}>
                    Home
                </Link>
                <Link to="/contact" style={{ padding: 5 }}>
                    About
                </Link>
            </nav>
        </>
    )
}

export default Navbar