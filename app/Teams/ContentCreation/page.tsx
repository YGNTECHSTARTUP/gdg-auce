import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { contentTeam } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Content Creation Team' parent='/Teams'/>
        <TeamTable team={contentTeam.team} members={contentTeam.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page