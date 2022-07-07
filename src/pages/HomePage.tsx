import React from 'react'
import AvatarGrid from 'src/features/home/container/AvatarGrid'
import AvatarGridBottom from 'src/features/home/container/AvatarGridBottom'
import DescriptionText from 'src/features/home/container/DescriptionText'
// import Footer from 'src/features/home/components/Footer'
import IntroText from 'src/features/home/container/IntroText'

export default function HomePage() {
  return (
    <div className='dark:bg-gray-900 flex flex-col items-center w-fit bg-slate-100'>
      <IntroText/>
      <AvatarGrid/>
      <DescriptionText/>
      <AvatarGridBottom/>
    </div>
  )
}
