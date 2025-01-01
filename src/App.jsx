import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Information from './component/Information/Information'
import Skills from './component/Skills/Skills'
import Experiance from './component/Experiance/Experiance'
import Educations from './component/Educations/Educations'
import Certificates from './component/Certificates/Certificates'
import Footer from './component/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div id="home"><Hero/></div>
      <div id="Information"><Information/></div>
      <div id="Skills"><Skills/></div>
      <div id="Experiance"><Experiance/></div>
      <div id="Educations"><Educations/></div>
      <div id="Certificates"><Certificates/></div>
      <div id="Footer"><Footer/></div>

    </>
  )
}

export default App
