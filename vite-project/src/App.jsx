import React from 'react'

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-zinc-700">
        <div className="p-2 mx-6 bg-zinc-800 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img src="/src/pictures/background.jpg"
            className="h-80 rounded-xl md:h-64 md:rounded-r-none md:rounded-l-xl
            transform hover:scale-105 duration-200 hover:rounded-xl" alt="bg-photo" 
            />
            <div className="p-6 md:p8">
              <h2 className="text-xl text-white font-serif text-center md:text-left">Get diet and fitness tips in your inbox</h2>
              <p className="max-w-xs my-5 text-gray-200 font-serif leading-5 tracking-wide text-center md:text-left">Eat better and exercise better. sign up for Diet & Fitness newsletter</p>
              <div className="flex flex-col md:flex-row space-y-5 md:space-x-3 md:space-y-0">
                <input type="text" placeholder="Enter your email" className="p-2 px-4 rounded-md text-white placeholder:text-center text-center md:text-left
                 placeholder:md:text-left bg-zinc-800 border outline-none border-zinc-600" />
                <button className="py-3 px-5 bg-lime-500 rounded-md hover:bg-lime-700 duration-500">Subscribe</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

// Get diet and fitness tips in your inbox
// Eat better and exercise better. sign up for Diet & Fitness newsletter