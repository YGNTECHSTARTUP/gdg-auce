import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const VideoComp = () => {
  return (
    <Card className="flex-row bg-cover container items-center imgee bg-no-repeat min-w-full rounded-none md:h-[40rem] 2xl:h-[60rem]">
    <CardContent className=''>
      <CardHeader className='basis-[50%]'>
        <CardTitle className="text-6xl font-bold text-white">We&apos;re <span className='text-blue-600  underline underline-offset-2'>GDGOC AUCE</span><br/>& We&apos;re Different</CardTitle>
        <CardDescription className="text-2xl 2xl:text-4xl font-normal text-black hidden md:block">Our community is being called to reimagine the future. As the only community where it focuses on the New  technologies,</CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-center items-center  '>
      <iframe width="1040" height="400" src="https://www.youtube.com/embed/Hbi9nz27kvc?si=vL0E5C47hk9_bxuF&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>         </CardFooter>
    </CardContent>
  </Card>
  
  )
}

export default VideoComp