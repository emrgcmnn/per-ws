import React from 'react';
import Dynamic from '../Components/DinamicCard'

import Markalogo from '../ShortLogo.png'
import FoolFish from '../foolfishimg.png'
import qrlink from '../qrcode.jpeg'

function Islerim() {
  const cardData = [
    {
      imageUrl: qrlink,
      title: 'RESTOURANT MENU',
      des1: "In my project, I created a restaurant menu using the dataset I stored on Firebase.",
      des2: 'In the admin panel, data that is processed and updated is automatically transferred to the menu page. Additionally, if access to the admin panel is not granted, users are automatically redirected to the login page.',
      LinkName1: 'Github ',
      Link1: ' https://github.com/emrgcmnn/menu-project',
      LinkName2: 'In Video  ',
      Link2: ' https://www.linkedin.com/feed/update/urn:li:activity:7118264615603482624/?originTrackingId=PiFwcIMYReiYY%2FoCPINVfA%3D%3D',
    },
    {
      imageUrl: 'https://www.star.com.tr/images/star-logo.png',
      title: 'STAR HABER CLONE',
      des1: "I've cloned a part of the Star News homepage, including dynamic weather and prayer times, as well as slither news menus.",
      des2: 'You can experience it through the following links:',
      LinkName1: 'Web Site  ',
      Link1: ' https://star-haber-clone.vercel.app/',
      LinkName2: 'Github  ',
      Link2: ' https://github.com/emrgcmnn/star-haber',
    },
    {
      imageUrl: 'https://wordvice-wp-static.s3-ap-northeast-1.amazonaws.com/uploads/2019/01/LinkedIn_HP.jpg',
      title: 'LINKEDIN',
      des1: 'You can browse my front end project',
      des2: 'on my linkedin and github profiles.',
      LinkName1: 'Linkedin  ',
      Link1: ' https://www.linkedin.com/in/emrgcmn',
      LinkName2: 'Github  ',
      Link2: ' https://github.com/emrgcmnn',
    },

    {
      imageUrl: Markalogo,
      title: 'MARKALOGO',
      des1: 'I designed the website for the company named MarkaLogo.',
      des2: 'You can visit the webpage from the links below and review the code on GitHub.',
      LinkName1: 'Web Site  ',
      Link1: ' https://markalogo.com',
      LinkName2: 'Github  ',
      Link2: ' https://github.com/emrgcmnn/markalogo',
    },

    {
      imageUrl: 'data:image/jpeg;base64,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',
      title: 'DATA GUESS',
      des1: 'The project where I filtered data retrieved from the backend into the desired type.',
      des2: 'You can access the project through the following links:',
      LinkName1: 'Web Site  ',
      Link1: 'https://dataguess-livid.vercel.app',
      LinkName2: 'Github  ',
      Link2: ' https://github.com/emrgcmnn/dataguess',
    },

    {
      imageUrl: FoolFish,
      title: 'UNITY 3D',
      des1: 'My game named Fool Fish, which I developed with unity program',
      des2: 'You can access the game from the link below.',
      LinkName1: 'Google Play ',
      Link1: ' https://play.google.com/store/apps/details?id=com.milkbrogame.ffversion',
      LinkName2: 'APK   ',
      Link2: ' https://drive.google.com/file/d/1pWyt8jIJnmhEwMUdl49kOTFUpXA3TDpg/view?usp=sharing',
    },
    // Diğer kart verileri buraya eklenebilir
  ];

  return (
 <div className="flex items-center justify-center min-h-screen">
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {cardData.map((data, index) => (
      <div className="flex flex-col" key={index}>
        <Dynamic {...data} />
      </div>
    ))}
  </div>
</div>

  
  
  );
}

export default Islerim;
