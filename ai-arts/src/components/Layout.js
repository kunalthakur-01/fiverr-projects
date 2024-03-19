import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './header/Header'

const Layout = (props) => {

  const location = useLocation();

  return (
    <>
        {location.pathname !== '/signup' && location.pathname !== '/login' &&  <Header />}
        <>
            {props.children}
        </>
    </>
  )
}

export default Layout
