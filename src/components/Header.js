import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see firebase docs for a list of available properties
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when  component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
        src={LOGO} alt="logo"/>
      {user && (<div className='flex p-2'>
      {showGPTSearch && (
            <select
              className="my-6 px-4 py-2 mr-6 bg-gray-900 text-white border border-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        <button className='font-sans px-2 m-5 p-2 bg-purple-800 text-white rounded-lg'
        onClick={handleGPTSearchClick}
        > {showGPTSearch ? "Home 🏠" : "GPT SEARCH 👁️"}</button>
        <button onClick={handleSignOut} className='text-white font-bold px-2 m-6 bg-red-700 p-2 rounded-md'>Sign Out⭕</button>
      </div>)}
    </div>
  )
}

export default Header
