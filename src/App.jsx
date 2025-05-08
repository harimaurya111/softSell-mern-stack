import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'


const App = () => {
  return (
    <ThemeProvider>
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer/>
      <ChatWidget/>
    </div>
  </ThemeProvider>
  )
}

export default App