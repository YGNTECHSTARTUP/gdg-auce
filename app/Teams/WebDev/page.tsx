import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { teamWeb } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Web Development Team' parent='/Teams'/>
        <TeamTable team={teamWeb.team} members={teamWeb.members}/>
        <div className='h-[24rem]'>

        </div>
    </div>
  )
}

export default page