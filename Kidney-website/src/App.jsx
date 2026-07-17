import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Topbar from './components/topbar/Topbar'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import { useState } from 'react'
import DoctorModal from './components/modal/DoctorModal'
import ServiceDetail from './pages/ServiceDetail'
import Services from './components/services/Services'

// 1. अपने दोनों कंपोनेंट्स को यहाँ इम्पोर्ट करें 
// (अगर आपकी फ़ाइलों का पाथ थोड़ा अलग है, तो उसे अपनी डायरेक्टरी के हिसाब से बदल लें)


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
          {/* होम पेज पर आपका Services सेक्शन पहले से ही रेंडर हो रहा होगा */}
          <Route path='/' element={<Home/>}/>

          {/* 2. डायनेमिक रूट: जब यूजर सर्विसेज के 'Explore Details' पर क्लिक करेगा */}
          {/* यह यूआरएल से ':serviceId' को पकड़ कर ServiceDetail पेज पर सही डेटा दिखाएगा */}
          <Route path='/services/:serviceId' element={<ServiceDetail/>}/>

          {/* (वैकल्पिक) अगर यूजर सीधे /services पर जाए, तो उसे मुख्य सर्विसेज़ कंपोनेंट दिखे */}
          <Route path='/services' element={<Services/>}/>
        </Routes>

        <FloatingButtons />
        <Footer onBookClick={toggleModal} />
        <DoctorModal isOpen={isModalOpen} toggleModal={toggleModal} />
      </BrowserRouter>
    </>
  )
}

export default App