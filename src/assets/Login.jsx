import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from './firbase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async(e) => {
    e.preventDefault();
    try {
     await signInWithEmailAndPassword(auth, email, password)
    //  Swal.fire({
    //    title: 'User  Succesfuly Login!',
    //    text: 'Do you want to continue',
    //    icon: 'success',
    //    confirmButtonText: 'Okay'
    //  })
  } catch (error) {
    //  Swal.fire({
      //    title: 'Something Went Wrong!',
      //    text: 'Do you want to continue',
      //    icon: 'error',
      //    confirmButtonText: 'Okay'
      //  })
      navigate('/sign')
    }
  };
  

  return (
    <div className='flex justify-center items-center flex-col h-[100vh] w-full'>
      <form className="max-w-sm mx-auto border-2 w-10/12 p-10">
        <div className="mb-5">
          <label 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input 
            type="email" 
            id="email" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="name@xyz123.com"
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            required 
          />
        </div>
        <div className="mb-5">
          <label 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input 
            type="password" 
            id="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            required 
          />
        </div>
       
        <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handlelogin}
        >

          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
