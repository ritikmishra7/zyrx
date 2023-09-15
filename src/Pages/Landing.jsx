import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Abstract from '../Components/Abstract'
import Features from '../Components/Features'
import Challenge from '../Components/Challenge'
import Faq from '../Components/Faq'
import Docs from '../Components/Docs'
import Footer from '../Components/Footer'

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Abstract />
            <Features />
            <Challenge />
            <Faq />
            <Docs />
            <Footer />
        </>
    )
}

export default Landing