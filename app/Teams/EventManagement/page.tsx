import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { eventManagementLogistics } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Event Management And Logistics Team' parent='/Teams'/>
        <TeamTable team={eventManagementLogistics.team} members={eventManagementLogistics.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page