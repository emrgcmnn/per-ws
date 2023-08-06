

export default function Islerim () {
  return (
    <div class="flex flex-wrap justify-center items-center h-screen">
      
      <div class="max-w-sm w-full md:w-1/2  p-4 ">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden  h-[420px]">
          <img src="https://play-lh.googleusercontent.com/oardrF44PlE16HC9icfjFi3IohmKRHbDIblGMrHj2UmPJ8A7RXNz3Vfh4N8JKxFnSQ=w240-h480" alt="" class="w-full h-48 pt-3 object-contain"/>
          <div class="py-4 px-6">
            <h2 class="text-xl font-semibold text-gray-800">UNITY 3D</h2>
            <p class="mt-2 text-gray-600">My game named Fool Fish, which I developed with unity program</p>
            <div class="mt-4">
              <span class="text-gray-700">You can access the game from the link below.</span>
            </div>
          </div>
          <div class="py-2 px-6 bg-gray-100 flex">
            <div>Google Play : </div>
            <a className=" text-blue-700 font-bold" target="_blank" href="https://play.google.com/store/apps/details?id=com.milkbrogame.ffversion"> Link</a>
          </div>
        </div>
      </div>
    
      <div class="max-w-sm w-full md:w-1/2 p-4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden h-[420px]">
          <img src="https://wordvice-wp-static.s3-ap-northeast-1.amazonaws.com/uploads/2019/01/LinkedIn_HP.jpg" alt="" class="w-full h-48 object-contain"/>
          <div class="py-4 px-6">
            <h2 class="text-xl font-semibold text-gray-800">LINKEDIN</h2>
            <p class="mt-2 text-gray-600">You can browse my front end project </p>
            <div class="mt-4">
              <span class="text-gray-700">on my linkedin and github profiles.</span>            
            </div>
          </div>
          <div class="py-2 px-6 bg-gray-100 flex justify-between mt-12 ">
            <div className="flex">
              <div>Linkedin : </div>
              <a className=" text-blue-700 font-bold" target="_blank" href="https://www.linkedin.com/in/emrgcmn/"> Link</a>
            </div>
          
            <div className="flex">
              <div>Github : </div>
              <a className=" text-blue-700 font-bold" target="_blank" href="https://github.com/emrgcmnn"> Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}