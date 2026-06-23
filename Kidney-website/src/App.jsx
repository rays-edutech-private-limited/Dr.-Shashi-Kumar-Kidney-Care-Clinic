import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Topbar from './components/topbar/Topbar'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons' // 1. Yahan import karein
import { useState } from 'react'
import DoctorModal from './components/modal/DoctorModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <Navbar onBookClick={toggleModal} />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <FloatingButtons />
        <Footer onBookClick={toggleModal} />
        <DoctorModal isOpen={isModalOpen} toggleModal={toggleModal} />
      </BrowserRouter>
    </>
  )
}

export default App