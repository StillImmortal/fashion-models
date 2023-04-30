import React from 'react'

// Components
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Header />
        <main className='h-[2000px]'>
            <Outlet/>
        </main>
        <Footer />
    </>
  )
}

export default MainLayout

