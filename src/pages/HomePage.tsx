import React from 'react'
import AvatarGrid from 'src/features/home/components/AvatarGrid'
import AvatarGridBottom from 'src/features/home/components/AvatarGridBottom'
import DescriptionText from 'src/features/home/components/DescriptionText'
import Footer from 'src/features/home/components/Footer'
import IntroText from 'src/features/home/components/IntroText'

export default function HomePage() {
  return (
    <div className='bg-gray-900'>
      <IntroText/>
      <AvatarGrid/>
      <DescriptionText/>
      <AvatarGridBottom/>
      <Footer/>
    </div>
  )
}
