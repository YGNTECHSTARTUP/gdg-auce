import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ReusableProps {
  name:string
  parent:string
    
}
const Reusable:React.FC<ReusableProps> = ({name,parent}) => {
  return (
    <div>
 <div className='mx-auto'>
              <div className="relative mt-24 bg-[#2f88e2] h-[40vh] container w-[100%] text-white">
        <Image
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          height={500}
          src="/banner.png"
        
          width={500}
        />
        <div className="relative z-10 flex flex-col  items-center justify-center space-y-6 py-16">
          <h1 className="text-6xl font-extrabold mt-24 ">{name}</h1>
       <Button className='bg-blue-400 '><Link href={"/"}>Home
       </Link><span className='mx-2'>|</span><Link href={parent}>{name}</Link></Button>
        </div>
      </div>
    </div>
    <div className='h-[40rem]'>

    </div>
    </div>
   
  )
}

export default Reusable