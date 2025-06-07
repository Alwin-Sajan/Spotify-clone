import React from 'react'
import SongItem from './SongItem'
import { songsData } from '../assets/assets'

const SearchPage = () => {

    
    return (
        <div>
            <h1 className='my-5 font-bold text-xl'>Search Page</h1>
            <input type="text" placeholder='Search' className='bg-white w-1/3 inline-block text-black font-bold rounded-2xl p-2 flex items-center' />
            <div className='grid overflow-auto mt-16'>
                <h2 className='text-2xl font-bold'>Recently Played</h2>
                <div className='flex items-center gap-4 ml-4'>
                    {songsData.map((item, index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={index.id} image={item.image}/>))}

                </div>
            </div>
        </div>
    )
}

export default SearchPage