import React, {Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Company from '../Comapny-section/companysection'
import Offer from '../Offers/offer'
import Courses from '../Courses-section/courses'
import AboutUs from '../About Us/About'
import Footer from '../Footer/footer'
import Updates from '../GetUpdates/updates'
import { FormFeedback } from 'reactstrap'

const Home = () => {
  return(
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Company />
      <Offer />
      <Courses />
      <Updates />
      <FormFeedback />
      <Footer />

    </Fragment>
  )
}
export default Home