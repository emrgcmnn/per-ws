import './App.css';
import Navbar from './Navbar';
import { Routes, Route,Switch , Link, NavLink } from 'react-router-dom';
import Prop from './profil.png';

import Anasayfa from "./Pages/Anasayfa"
import Hakımda from "./Pages/Hakkımda"
import Iletisim from "./Pages/Iletisim"
import Islerim from "./Pages/Islerim"

function App() {
  return (
    <>
      
        <Navbar />
       
         <div class='App -z-50'></div>
        
      
        <Routes>
          <Route path="/" element = {
            <>
               <div class="min-h-screen flex justify-center items-center">
                  <div class="text-center">
                    <div className='m-6'>
                      <h1 class="text-4xl text-white font-bold">Welcome My Website </h1>
                    </div>
                    <div class="mx-auto w-1/4 m-6">
                      <img class="rounded-full" src={Prop} alt="" />
                    </div>
                    <div className='m-6 '>
                    <NavLink  to="/Hakkımda">
                    
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Get Started
                      </button>
                    </NavLink>
                    </div>
                  </div>
                </div>
            </>
          } />
          <Route path="/Anasayfa" element = {<Anasayfa />} />
          <Route path="/Hakkımda" element = {<Hakımda />} />
          <Route path="/Iletisim" element = {<Iletisim />} />
          <Route path="/Islerim" element = {<Islerim />} />
        </Routes>
       
    </>
  );
}

export default App;
