import React, {useState} from 'react'
import './Navbar.scss'

import {HiMenuAlt4} from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';
import assets from '../../constants/images'
export const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={assets.logo} alt='logo'/>
    </div>
    <ul className='app__navbar-links'>
      {
        [
          'home',
          'about',
          'work',
          'skills',
          'contact'
        ].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))
      }
    </ul>

    <div className='app__navbar-menu'>
      <HiMenuAlt4  onClick={()=>setToggle(true)}/>
      {
        Toggle && (
          <motion.div
          whileInView={{x:[300,0]}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX  onClick={()=>setToggle(false)}/>
            <ul>
            {
        [
          'home',
          'about',
          'work',
          'skills',
          'contact'
        ].map((item)=>(
          <li key={item}>
            <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
          </li>
        ))
      }
       </ul>
          </motion.div>
        )}
       
    </div>
   </nav>
  )
}



