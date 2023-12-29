import React from 'react'
import Signup from '../Components/Signup'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

function SignUp() {
    return (
        <div>
            <Nav />
            <Signup />
            <Newsletter />
            <Footer></Footer>
        </div>
    )
}

export default SignUp