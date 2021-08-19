import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Logo from '../../assets/Nubank_Logo.png'
import * as S from './styles'

const Header = () => (
  <S.Container>
    <S.Top>
      <S.Logo />
      <S.Title>Hello!</S.Title>
    </S.Top>
    <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
  </S.Container>
)

export default Header
