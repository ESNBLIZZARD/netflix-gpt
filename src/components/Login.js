import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidateData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from "../utils/constants";


const Login = () => {

    const [isSignInForm, setIsSignInFrom] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignForm = () =>{
        setIsSignInFrom(!isSignInForm);
    }

    const handleButtonClick = () => {
        //Validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        //Sign In - Sign Up
        if(! isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
               .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });     
               })
               .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode+ "-" +errorMessage);
               });
         }
         else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
               .then((userCredential) => { 
            const user = userCredential.user;
               })
               .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" +errorMessage);
               });
         }
    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className="w-screen object-cover" src={BG_URL} alt="logo"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-500 w-full rounded-lg align-middle' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer'onClick={toggleSignForm}>{isSignInForm ? "New to Netflix-GPT? Sign Up Now" : "Already Registered! Sign In Now"}</p>
        <p className='text-xs py-4'>©️ Jugantar Chakraborty </p>
      </form>
    </div>
  )
}

export default Login
