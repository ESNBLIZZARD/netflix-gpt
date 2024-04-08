import React, { useRef } from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md">
          {lang[langKey].search} 🔍
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar
