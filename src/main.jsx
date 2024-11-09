import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer';
import About from './components/About';
import Feature from './components/Feature';
import Price from './components/Price';
import Contact from './components/Contact';


const commonMotionProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: "easeInOut" },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex min-h-screen bg-gray-100 flex-col'>
      <Navbar />
      <div className='w-full'>
        <motion.div {...commonMotionProps}>
          <Hero />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <About />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Feature />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Price />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Contact />
        </motion.div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  </React.StrictMode>,
)
