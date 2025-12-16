import React from 'react'

import KitchenWare from '../components/LandingPage/KitchenWare'
import Product from '../components/LandingPage/Product'
import HeroSection from '../components/LandingPage/HeroSection'
import { BestSelling } from '../components/LandingPage/BestSelling'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <BestSelling/>
      
    </div>
  )
}

export default LandingPage