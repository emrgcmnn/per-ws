import Image from './logo-react.png';
import Burger from '../src/Burger-react.svg'
import React, { useState , useEffect, useRef} from 'react'
import './navbar.css';

import { Routes, Root, Link, NavLink } from 'react-router-dom';



const Navbar = () =>  {
    const[open , setOpen] = useState(false);
    

    const handleLinkClick = () => {
        setOpen(false);
      };

      
    return (
        <>
    

        <nav className='bg-gradient-to-r from-black to-gray-800 '>
            <div className=' flex justify-around mx-auto items-center w-full px-8 py-2'>
                <div className=' flex items-center justify-between w-full z-50 md:w-auto '> 
                    
                    <div className='w-16 hover:cursor-pointer '>
                        <NavLink to="/Anasayfa">
                            <img src={Image} alt="Logo"  />
                        </NavLink>                  
                    </div>
                    <div className='w-9 mr-5 md:hidden '  onClick={()=> setOpen(!open)}>                    
                                <img src={Burger} alt="Logo" />
                    </div>
                </div>
                
                <div>            
                    <div className='text-white font-medium md:flex hidden'>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Anasayfa">Home</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Hakkımda">About</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Islerim">Projects</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Iletisim">Contact</NavLink>
                    </div>
                </div>
                
                <div 
                    className={` md:hidden drop-shadow-md  right-0 bg-gray-800   absolute rounded-b-lg w-auto h-min bottom-0 
                    duration-300 ${open ? 'top-[60px]' : 'top-[-100%] '}`
                        }
                >                     
                    <NavLink onClick={handleLinkClick}  to="/Hakkımda" className='block p-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full  ' >About</NavLink>
                    <NavLink onClick={handleLinkClick}  to="/Islerim" className='block p-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '>Projects</NavLink>
                    <NavLink onClick={handleLinkClick}  to="/Iletisim" className='block p-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '>Contact</NavLink>
                    
                </div>
            </div>
        
        </nav>

       
        </>
       
    )
}

export default Navbar;