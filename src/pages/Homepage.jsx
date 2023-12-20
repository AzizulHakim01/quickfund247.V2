import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WeOffer from '../components/WeOffer'
import About from '../components/About'
import Process from '../components/Process'
import YouAreCoverd from '../components/YouAreCoverd'
import HeroTest from '../components/HeroTest'

const Homepage = () => {
  return (
    <Layout>
        {/* <Hero/> */}
        <HeroTest/>
        <WeOffer/>
        <About/>
        <Process/>
        <YouAreCoverd/>
    </Layout>
  )
}

export default Homepage