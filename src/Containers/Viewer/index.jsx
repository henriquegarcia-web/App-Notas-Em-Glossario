import React from 'react'
import View from '../../Components/View'

import {
  ViewerContainer,
  Header
} from './style'

const Viewer = () => {
  return (
    <ViewerContainer>
      <Header>
        <div className='header__search_box'><input type='text' placeholder='Procure uma Categoria, Título, Descrição, ...'/></div>
      </Header>

      <View header='Todas suas notas' />
    </ViewerContainer>
  )
}

export default Viewer