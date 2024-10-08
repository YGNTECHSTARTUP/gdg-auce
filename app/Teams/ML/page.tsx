import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { teamML } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Machine Learning Team' parent='/Teams'/>
        <TeamTable team={teamML.team} members={teamML.members}/>
        <div className='h-[24rem]'>

        </div>
    </div>
  )
}

export default page