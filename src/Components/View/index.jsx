import React from 'react'

import {
  ViewContainer
} from './style'

const View = ({ header }) => {
  return (
    <ViewContainer>
      <div className='view__header'><h2>{header}</h2></div>
      
      <div className='view__content'>
        
      </div>
    </ViewContainer>
  )
}

export default View