import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { socialMedia } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Social Media Team' parent='/Teams'/>
        <TeamTable team={socialMedia.team} members={socialMedia.members}/>
        <div className='h-[24rem]'>

        </div>
    </div>
  )
}

export default page