import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='col-span-11'>
        <h1>Main Container</h1>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer
