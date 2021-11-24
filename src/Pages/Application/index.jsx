import React from 'react'

import {
  PageApplication
} from './style'

import Menu from '../../Containers/Menu/index'
import Viewer from '../../Containers/Viewer/index'

const Application = () => {
  return (
    <PageApplication>

      <Menu />
      <Viewer />
      
    </PageApplication>
  )
}

export default Application