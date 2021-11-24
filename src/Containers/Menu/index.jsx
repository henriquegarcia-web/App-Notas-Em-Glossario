import React from 'react'

import {
  MenuContainer
} from './style'

import {
  Button
} from '../../globalStyles'

import {
  IoAddCircleOutline,
  IoCaretDown,
  IoArrowForwardCircleOutline,
  IoTrashBinOutline,
  IoBookmarkOutline,
  IoAlbumsOutline
} from 'react-icons/io5'

const Menu = () => {

  return (
    <MenuContainer>
      <div className='menu__logo'>
        <h1>Glossary <br></br> Notes</h1>
      </div>

      <div className='menu__add_note'>
        <AddNoteButtons />
      </div>

      <div className='menu__general'>
        <div className='menu__label'>General</div>
        <GeneralButtons />
      </div>

      <div className='menu__categories'>
        <div className='menu__label'>Suas Categorias</div>
        <CategoriesButtons />
      </div>
    </MenuContainer>
  )
}

export default Menu


function AddNoteButtons() {
  return (
    <>
      <Button
        iconSize='24px'
        fontSize='16px' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <IoAddCircleOutline /> Criar Anotação
      </Button>

      <Button 
        iconSize='24px'
        fontSize='16px' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <IoAddCircleOutline /> Criar Categoria
      </Button>
    </>
  )
}

function GeneralButtons() {
  return (
    <>
      <Button
        iconSize='20px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <IoAlbumsOutline /> Todas as Notas
      </Button>

      <Button
        iconSize='20px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <IoBookmarkOutline /> Notas Importantes
      </Button>

      <Button
        iconSize='20px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <IoTrashBinOutline /> Notas Deletadas
      </Button>
    </>
  )
}

function CategoriesButtons() {
  return (
    <>
      <Button
        bgCategory='greenyellow'
        iconSize='18px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <div className='category_identifier'></div> 
          Programação
          <div><IoArrowForwardCircleOutline /></div>
      </Button>

      <Button
        bgCategory='orange'
        iconSize='18px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <div className='category_identifier'></div> 
          Estudos 
        <div><IoArrowForwardCircleOutline /></div>
      </Button>

      <Button
        bgCategory='yellow'
        iconSize='18px'
        fontSize='15px'
        fontWeight='500' 
        fontColor='white' 
        bgColor='black' 
        bgHover='blue'
        margin='0 0 8px 0'
      >
        <div className='category_identifier'></div> 
          Receitas
          <div><IoArrowForwardCircleOutline /></div>
      </Button>
    </>
  )
}