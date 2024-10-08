import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { teamAndroid } from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Android Team' parent='/Teams'/>
        <TeamTable team={teamAndroid.team} members={teamAndroid.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page