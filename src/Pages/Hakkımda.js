import Untiy from '../unity.png'
import Frontend from '../frontend.png'
import Navbar from "../Navbar"
import React from 'react';

export default function Hakkımda () {
  return (<>
    <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-3xl font-bold mb-4">I am Emre Göçmen</h1>
      <p class="text-gray-600 mb-4">I am Emre from Turkey. I live in Istanbul and  I'm 30 years old.</p>
      <p class="text-gray-600 mb-4">In 2016, I graduated from Düzce University, 
      Department of Tourism and Hotel Management. I
       worked in the tourism industry between 2016-2018. 
       I worked in the Unity 3D game programming industry as 
       a freelancer in 2018 - 2020. I worked on a few hyper casual game projects, 
       one of which was completely my own. </p>
      <p class="text-gray-600">Between 2020 and 2023, 
      I worked in a managerial position at a construction company. 
      During this period, I took a frontend developer 
      training and have been working as a freelance 
      frontend developer for the last 4 months. 
      I am also working on projects in the Unity engine, 
      specifically focused on 2D hyper-casual games.</p>
    </div>
  </div>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-3xl font-bold mb-4">Certificates</h1>
      <h2 class="text-gray-600 font-semibold mb-4">You can see the certificates of the courses I have successfully completed below</h2>
      
      <div className='my-6 border border-gray-300 rounded-lg p-4'>
        <div className=' flex'>
          <img className='w-8  h-6  mr-2' src={Frontend}></img>
          <h1 class="text-gray-600 font-medium mb-4">Front-End Developer Course </h1>
        </div>
        <h1 class="text-gray-600">Instructors : Team Laba-Turkey , Sinan Mutlu, Taha Selim Aksakal</h1>
        <a className=" text-blue-700 font-bold " target="_blank" href="https://laba.com.tr/"> Link</a>
     </div>   

     <div className='my-6 border border-gray-300 rounded-lg p-4'>
        <div className='flex'>
          <img className=' h-6 w-12 mr-2' src={Untiy}></img>
          <h1 class="text-gray-600 font-medium mb-4">Complate C# Unity Game Developer </h1>
        </div>
        <h1 class="text-gray-600">Instructors : GameDev.tv Team, Rick Davidson, Garry Pettie</h1>
        <a className=" text-blue-700 font-bold" target="_blank" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e32a9ac7-c407-41db-a8d3-bab20326bf0e.pdf"> Link</a>
     </div>  

     <div className='my-6 border border-gray-300 rounded-lg p-4'>
        <div className='flex'>
          <img className='h-6 w-12 mr-2 ' src={Untiy}></img>
          <h1 class="text-gray-600 font-medium mb-4">Unity C# Sıfırdan 2D & 3D Oyun Geliştirme Eğitimi </h1>
        </div>
        <h1 class="text-gray-600">Instructors : Jankat Gürbüz</h1>
        <a className=" text-blue-700 font-bold" target="_blank" href="https://www.udemy.com/certificate/UC-J8S9E1G5/"> Link</a>
     </div> 

       <div className='my-6 border border-gray-300 rounded-lg p-4'>
        <div className='flex'>
          <img className='h-6 w-12 mr-2 ' src={Untiy}></img>
          <h1 class="text-gray-600 font-medium mb-4">Unity C# 2D Oyun Geliştirme Eğitimi</h1>
        </div>
        <h1 class="text-gray-600">Instructors : Kadir Kobak</h1>
        <a className=" text-blue-700 font-bold" target="_blank" href="https://www.udemy.com/certificate/UC-aec2c259-4e66-4de6-ba28-fc98141b0e9f/"> Link</a>
     </div>  
    </div>
  </div>
  </>
  )
}