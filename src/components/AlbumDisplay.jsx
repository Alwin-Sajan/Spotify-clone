import React from 'react'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const AlbumDisplay = () => {
    const id = useParams()
    console.log(id)
    let data = albumsData[id.id]
    console.log(data)
    return (
        <div>
            <h1 className='text-xl font-bold'>Album</h1>
            <div className='flex items-center gap-4 mt-4'>
                <img className='w-[250px] h-[250px] rounded' src={data.image} alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>{data.name}</h1>
                    <p className='text-slate-300 text-sm'>{data.desc}</p>
                </div>
            </div>

            <h2 className='font-bold text-xl my-16'>Songs</h2>

        </div>
    )
}

export default AlbumDisplay