import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WeOffer from '../components/WeOffer'
import About from '../components/About'
import Process from '../components/Process'

const Homepage = () => {
  return (
    <Layout>
        <Hero/>
        <WeOffer/>
        <About/>
        <Process/>
    </Layout>
  )
}

export default Homepage