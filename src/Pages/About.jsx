import React from 'react'
import Newsletter from '../Components/Newsletter'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Aboutus from '../Components/Aboutus'
import Aboutus2 from '../Components/Aboutus2'

function About() {
    return (
        <div className='bg-pink-200 '>
            <Nav />
            <Aboutus />
            <Aboutus2 />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default About 