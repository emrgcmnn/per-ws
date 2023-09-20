    function DynamicCard({ title, des1, des2, imageUrl, LinkName1, Link1, LinkName2, Link2 }) {
        return (
        
            
        
        <div class="max-w-sm w-full p-4">
        <div class="bg-white opacity-80 shadow-lg rounded-lg overflow-hidden flex flex-col">
            <img src={imageUrl} alt="" class="w-full h-48 p-4 object-contain"/>
            <div class="py-4 px-6">
            <h2 class="text-xl font-semibold text-gray-800">{title}</h2>
            <p class="mt-2 text-gray-600">{des1}</p>
            <div class="mt-4">
                <span class="text-gray-700">{des2}</span>            
            </div>
            </div>
            <div class="py-2 px-6 bg-gray-100 flex justify-between mb-4 ">
            <div className="flex">
                <div>Linkedin : </div>
                <a className=" text-blue-700 font-bold" target="_blank" href={Link1}> {LinkName1}</a>
            </div>
            
            <div className="flex">
                <div>Github : </div>
                <a className=" text-blue-700 font-bold" target="_blank" href={Link2}> {LinkName2}</a>
            </div>
            </div>
        </div>
        </div>
        
            

        
        );
    }
    
    
    export default DynamicCard ;