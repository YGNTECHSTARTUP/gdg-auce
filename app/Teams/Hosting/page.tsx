import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { hostingCommunityOutreach } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Hosting And Community Outreach Team' parent='/Teams'/>
        <TeamTable team={hostingCommunityOutreach.team} members={hostingCommunityOutreach.members}/>
        <div className='h-[24rem]'>

        </div>
    </div>
  )
}

export default page