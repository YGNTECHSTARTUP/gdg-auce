import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white lg:text-lg justify-center  bottom-0 w-full  font-extrabold text-xs sm:text-sm  flex '>
        Created by the &nbsp;
        <Link href={"/Teams/WebDev"}>
        <span className='text-blue-500'>GDG AUCE</span>
        </Link>&nbsp; Web Development Team
    </div>
  )
}

export default Footer