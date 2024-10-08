import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { teamCloud } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Cloud Team' parent='/Teams'/>
        <TeamTable team={teamCloud.team} members={teamCloud.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page