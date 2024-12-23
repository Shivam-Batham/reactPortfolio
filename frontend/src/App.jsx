import React, { useContext } from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { DarkmodeContext } from './Components/context/Darkmode'

const App = React.memo(function() {
  const {darkmode} = useContext(DarkmodeContext)
  return (
    <>
      <Header />
      <div>
      
          <Outlet  /> 
        
      </div>
      <Footer />
    </>
  )
})

export default App
