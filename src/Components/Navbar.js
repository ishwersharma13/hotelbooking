import React, { useState } from 'react';
import { BsFillBookmarkDashFill } from 'react-icons/bs';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false);
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
  };

  return (
    <nav className="px-20 py-6 flex items-center gap-x-20 bg-white border-b border-gray-200">
      <div className="text-2xl text-purple-800 flex items-center font-semibold">
        <BsFillBookmarkDashFill className="text-2xl mr-2 text-purple-600" />
        comfortBook
      </div>
      <div className="w-1/3 font-medium">
        <ul className="flex justify-between items-center tracking-wide">
          <li className="px-3 py-1 bg-purple-200 text-purple-700 rounded-sm">
            <a href="/">Rent</a>
          </li>
          <li className="px-3 py-1 rounded-sm">
            <a href="/">Buy</a>
          </li>
          <li className="px-3 py-1 rounded-sm">
            <a href="/">Sell</a>
          </li>
          <li className="px-3 py-1 rounded-sm">
            <select className="bg-transparent focus:outline-none">
              <option>Manage Property</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="w-1/6 flex justify-between items-center ml-auto">
        <button
          onClick={toggleLoginForm}
          className="px-5 py-2 text-purple-700 border-2 border-gray-200 rounded-md font-medium"
        >
          Login
        </button>
        <button
          onClick={toggleSignUpForm}
          className="px-5 py-2 border-2 border-transparent text-white bg-purple-500 rounded-md font-medium"
        >
          Sign up
        </button>
      </div>
      {showLoginForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              Login
            </button>
            <div className="text-center mt-2 text-gray-600">
              Or login with:
              <button
                className="ml-2 text-purple-600"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <button
                className="ml-2 text-blue-600"
                onClick={handleFacebookLogin}
              >
                Facebook
              </button>
            </div>
            <button
              onClick={toggleLoginForm}
              className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSignUpForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
            {/* Add input fields for sign-up */}
            <div className="mb-4">
              <label htmlFor="signup-email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                name="signup-email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signup-password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                name="signup-password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              Sign up
            </button>
            <div className="text-center mt-2 text-gray-600">
              Or sign up with:
              <button
                className="ml-2 text-purple-600"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <button
                className="ml-2 text-blue-600"
                onClick={handleFacebookLogin}
              >
                Facebook
              </button>
            </div>
            <button
              onClick={toggleSignUpForm}
              className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
