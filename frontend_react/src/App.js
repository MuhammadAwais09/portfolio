import React from 'react'
import {About} from '../src/container/About/About'; 
import {Footer} from '../src/container/Footer/Footer';
import {Header} from '../src/container/Header/Header';
import {Skills} from '../src/container/Skills/Skills';
import {Testimonial} from '../src/container/Testimonial/Testimonial';
import { Work } from '../src/container/Work/Work'; 
import { Navbar } from '../src/components/Navbar/Navbar'
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App