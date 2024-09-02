import React from 'react'
import Send from './Send.png';

const MessageCard = () => {
  return (
    <>
    <div className='h-[100vh] w-full flex justify-center items-center bg-green-200 text-black'>
        <div className='h-96 w-full border-2 border-gray-600 p-3 m-8'>
         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Custom Chat App Logo */}
          <svg
            className="h-8 w-8 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 21v-5.586L2.293 14.93A1 1 0 012 13.586V4a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-6.586L6 19.586V21a1 1 0 01-2 0zM4 4v8.586l1.293 1.293A1 1 0 016 14.586L7.586 13H18V4H4z" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white border-b-4 border-green-600">Chat App</span>
        </a>
        <div className='h-64 p-8 overflow-auto '>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
            <p>Some messege</p>
        </div>
        <div className='flex p-4 mx-4'>
    <input 
          type="text" 
          id="username" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
          placeholder="Some thing write" 
          required 
          />
          <button className='px-6'>
          <img 
        src={Send} 
        alt="Description of the image" 
        className="w-8 h-auto flex justify-center items-center" // Tailwind CSS classes
      />
          </button>
          </div>
      </div>
          </div>
    </>

  )
}

export default MessageCard
