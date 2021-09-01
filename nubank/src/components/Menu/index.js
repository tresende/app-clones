import React from 'react'
import { Animated } from 'react-native'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as S from './styles'

const Menu = () => (
  <S.Container>
    <S.Code>
      <QRCode fgColor="#fff" bgColor="#8b10ae" size={80} value="https://thiagoresende.dev" />
    </S.Code>
    <S.Nav>
      <S.NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <S.NavText>Ajuda</S.NavText>
      </S.NavItem>
      <S.NavItem>
        <Icon name="person-outline" size={20} color="#FFF" />
        <S.NavText>Perfil</S.NavText>
      </S.NavItem>
      <S.NavItem>
        <Icon name="credit-card" size={20} color="#FFF" />
        <S.NavText>Configurar Cartão</S.NavText>
      </S.NavItem>
      <S.NavItem>
        <Icon name="smartphone" size={20} color="#FFF" />
        <S.NavText>Configurações do App</S.NavText>
      </S.NavItem>
      <S.SignOutButton onPress={() => {}}>
        <S.SignOutButtonText>Sair do App</S.SignOutButtonText>
      </S.SignOutButton>
    </S.Nav>
  </S.Container>
)

export default Menu
