import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

const Main_lauout = ({children}) => {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  )
}

export default Main_lauout
