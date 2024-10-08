import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { teamFlutter } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Flutter Team' parent='/Teams'/>
        <TeamTable team={teamFlutter.team} members={teamFlutter.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page