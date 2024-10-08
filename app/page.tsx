import React from 'react'
import { ImagesSliderDemo } from './comps/Hero'
import VideoComp from './comps/VideoComp'
import Lead from './comps/Lead'

import { TypewriterEffectSmoothDemo } from './comps/Contact'


const page = () => {
  return (
    <div className='px-4 py-2'>
<ImagesSliderDemo/>
<VideoComp/>
<Lead/>
<TypewriterEffectSmoothDemo/>
    </div>
    
  )
}

export default page