import React from 'react'
import { MyComponent } from '../components/MyComponent'

const Home = () => {
    return (
        // this is how you pass a propo from one component to another 
        <> <MyComponent firstName={'sara'} lastName={'jawed'} address={'house 125'} /></>
    )
}

export default Home