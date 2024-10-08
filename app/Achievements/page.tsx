import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full text-3xl lg:text-5xl xl:text-9xl font-extrabold'>
      <div className='flex-col'>
      <div>
      Comming Soon
        </div>
      <Link href='/'>
        
        <Button>Back To Home</Button>
        </Link>
      </div>
        
    </div>
  )
}

export default page