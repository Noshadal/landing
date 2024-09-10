import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firbase.config';
import { setDoc, doc } from 'firebase/firestore';

function Sign() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(auth, email, psw);
      const uid = response.user.uid;
      const userData = { name, email, psw, uid };
      await setDoc(doc(db, 'users', uid), userData);
      Swal.fire({
        title: 'User Successfully Registered!',
        icon: 'success',
      });
      localStorage.setItem('uid', uid);
      navigate('/login');
    } catch (error) {
      Swal.fire({
        title: 'Something Went Wrong!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-full min-h-[100vh] w-full bg-gray-100">
      <form
        className="max-w-sm w-full md:max-w-md lg:max-w-lg mx-auto border-2 border-gray-300 p-6 md:p-8 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your username
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@xyz123.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            required
          />
        </div>

        <div className='flex justify-between items-center flex-wrap'>
          <button
            type="submit"
            className="text-white bg-blue-700 p-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <Link to="/login" className='p-3 text-blue-600 font-semibold hover:text-blue-800'>
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Sign;
