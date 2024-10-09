import Reusable from '@/app/comps/Reusable'
import TeamTable from '@/app/comps/TeamTable'
import { graphicDesign } from '@/app/constant'

import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='Graphic Designing Team' parent='/Teams'/>
        <TeamTable team={graphicDesign.team} members={graphicDesign.members}/>
        <div className='h-[25rem]'>

        </div>
    </div>
  )
}

export default page