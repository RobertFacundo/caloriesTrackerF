import React from "react"
import { Router, Route, Routes } from "react-router-dom"
import { Auth } from "./views/Authentication"
import { Home } from "./views/Home"
import { Profile } from "./views/Profile"
import  Footer  from '../src/components/Footer'

function App() {

  return (
   <>
     <Routes>
       <Route path='/' element={<Auth />} />
       <Route path='/Home' element={<Home />} />
       <Route path='/Profile' element={<Profile />} />
     </Routes>
       <Footer />
   </>
  )
}

export default App
