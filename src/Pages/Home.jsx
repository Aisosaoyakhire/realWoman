import React from 'react'
import Nav from  "../Components/Nav"
import Card from "../Components/Card"
import Footer from "../Components/Footer"
import Newsletter from '../Components/Newsletter'





function Home() {
    return (
      <div>
        <Nav />
        <Card />
        <Newsletter />
        <Footer />
      </div>
    );
  }
  
  export default Home;