import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { coreTeam} from '@/app/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Core Team' parent='/Teams'/>
        <TeamTable team={coreTeam.team} members={coreTeam.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page