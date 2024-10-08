import Image from 'next/image'
import React from 'react'

const Lead = () => {
  return (
    <div>
        <h1 className='text-7xl font-bold underline text-blue-600'>Organizer</h1>
        <p className='text-2xl font-semibold mt-2'>Google Developer Groups On Campus Andhra University College of Engineering.</p>
        <div className='rounded-full  hover:scale-105   hover:border-blue-500  border-black border-4  w-48 h-48 md:w-[18rem] md:h-[18rem] lg:w-96 lg:h-96 bg-black flex justify-center mx-auto'>
<Image src={'/pic.png'} alt='profile pic' height={1020} width={1020}/>

   </div>
   <div className='flex justify-center text-4xl font-bold'>
   GDG OnCampus AUCE Lead 24-25
   </div>
   

        </div>
    
  )
}

export default Lead