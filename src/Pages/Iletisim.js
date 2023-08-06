import Navbar from "../Navbar"

export default function Iletisim () {
  return (
    <>
    <div class="container mx-auto mt-8">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="https://api.web3forms.com/submit" method="POST">
          
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Enter your name" required/>
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Enter your email" required/>
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Message:
            </label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Enter your message" required></textarea>
          </div>
          
          <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
          
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit Form
            </button>
          </div>

        </form>
      </div>
  </>
  )
}