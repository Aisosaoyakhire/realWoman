
import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
   <header className="flex justify-between text-gray-100 bg-gray-900 body-font shadow w-full">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

  <Link to="" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="https://pazly.dev/logo.png" style={{height: 40, marginTop: 10, marginBottom: 10}} alt="logo" />
      <span className="ml-3 text-xl">realWoman</span>
    </Link>

    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link to="/" className="mr-5 hover:text-gray-200 cursor-pointer border-b border-transparent hover:border-indigo-600">Home</Link>
      <Link to="/about"className="mr-5 hover:text-gray-200 cursor-pointer border-b border-transparent hover:border-indigo-600">About</Link>
      <Link to="/blogs"className="mr-5 hover:text-gray-200 cursor-pointer border-b border-transparent hover:border-indigo-600">Blogs</Link>
      <Link to="/contact" className="hover:text-gray-200 cursor-pointer border-b border-transparent hover:border-indigo-600">Contact</Link>
    </nav>
   
    <div class="flex flex-row-reverse space-x-4 space-x-reverse w-64">
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link to="SignUp"className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
        sign up
      </Link>
    </div>

    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link to="LogIn"className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
        Log In
      </Link>
    </div>
  </div>
  </div>
</header>

  );
}

