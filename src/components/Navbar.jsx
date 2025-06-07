import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setShowSongs, setShowAlbums }) => {
  
  const handleButtonClick = (songs, albums) => {
    setShowSongs(songs);
    setShowAlbums(albums);
  };

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
          <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full  flex items-center justify-center'>G</p>
        </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <button onClick={() => handleButtonClick(true, true)} className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</button>
        <button onClick={() => handleButtonClick(true, false)} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</button>
        <button onClick={() => handleButtonClick(false, true)} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</button>
      </div>
    </>
  );
}

export default Navbar;
