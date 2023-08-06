import '../App';
import React from "react"
import Prop from '../profil.png';

export default function Anasayfa () {
  return (
    <>
   <div class="min-h-screen flex justify-center items-center">
    <div class="text-center">
      <div className='m-6'>
        <h1 class="text-4xl text-white font-bold">Welcome My Website </h1>
      </div>
      <div class="mx-auto w-1/4 m-6">
        <img class="rounded-full" src={Prop} alt="" />
      </div>
      <h2 class="text-4xl text-white font-bold">EMRE GÖÇMEN</h2>
    </div>
  </div> 
    </>
  )
}