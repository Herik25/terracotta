import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wave from 'react-wavify'
import Hero from './Hero'
import Sec2 from './Sec2'
import Sec3 from './Sec3'

function App() {

  return (
    <div className=' background'>
     <Hero />
     <Sec2 />
     <Sec3 />
    </div>
  )
}

export default App
