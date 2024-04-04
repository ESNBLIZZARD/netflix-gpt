import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInFrom] = useState(true);

    const toggleSignForm = () =>{
        setIsSignInFrom(!isSignInForm);
    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <button className='p-4 my-6 bg-red-500 w-full rounded-lg align-middle'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer'onClick={toggleSignForm}>{isSignInForm ? "New to Netflix-GPT? Sign Up Now" : "Already Registered! Sign In Now"}</p>
        <p className='text-xs py-4'>©️ Jugantar Chakraborty </p>
      </form>
    </div>
  )
}

export default Login
