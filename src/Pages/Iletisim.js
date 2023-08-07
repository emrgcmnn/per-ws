import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Iletisim() {
  const [state, handleSubmit] = useForm("mwkdlejq");

  return (
    <>
      <div className="container mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={state.submitting}
            >
              Submit Form
            </button>
          </div>
        </form>
        {state.succeeded && (
          <div className="text-center text-green-600 mt-4 bg-teal-100 p-4 rounded-lg">
            <p className="text-xl font-bold">Your message has been sent! Thank you!</p>
          </div>
        )}
      </div>
    </>
  );
}
