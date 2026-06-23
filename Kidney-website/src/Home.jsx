import React, { useState } from 'react'
import Herosection from './components/herosection/Herosection'
import About from './components/abouts/About'
import Services from './components/services/Services'
// import Specialists from './components/specialists/Specialists'
import VideosTestimonials from './components/testimonials/VideosTestimonials'
import TextTestimonials from './components/testimonials/TextTestimonials'
import ContactUs from './components/contactus/ContactUs'
import Gallery from './components/gallery/Gallery'
import DoctorProfileVideos from './components/DoctorProfileVideos/DoctorProfileVideos'
import DoctorModal from './components/modal/DoctorModal'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {/* Id matching with Navbar hrefs */}
      <div id="home">
        <Herosection onBookClick={toggleModal} />
      </div>

      <div id="about">
        <About onBookClick={toggleModal} />
      </div>
      <div>
        <DoctorProfileVideos onBookClick={toggleModal}/>
      </div>

      <div id="services">
        <Services onBookClick={toggleModal} />
      </div>
      <div id="gallery">
        <Gallery/>
      </div>

      {/* Testimonials section wrapper */}
      <div id="testimonials">
        <VideosTestimonials onBookClick={toggleModal} />
        <TextTestimonials onBookClick={toggleModal} />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
      <DoctorModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default Home