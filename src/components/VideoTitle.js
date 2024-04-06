import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold w-1/3'>{title}</h1>
      <p className='py-6 lext-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-12 text-xl rounded-md hover:bg-opacity-85'>▶ Play</button>
        <button className='mx-2 bg-white text-black p-2 px-12 text-xl rounded-md hover:bg-opacity-85'>More Info ℹ️</button>
      </div>
    </div>
  )
}

export default VideoTitle
