import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Fetchapi from '../components/Fetchapi'
import ImageSlider from '../components/ImageSlider'


const Apidata = () => {
  return ( 
    <>
        <MainLayout>
            <Fetchapi></Fetchapi>
            <ImageSlider></ImageSlider>
        </MainLayout>
    </>
  )
}

export default Apidata
