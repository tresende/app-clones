import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as S from './styles'

const Tabs = () => (
  <S.Container>
    <S.TabsContainer>
      <S.TabItem>
        <Icon name="person-add" size={24} color="#FFF" />
        <S.TabText>Inidicar Amigos</S.TabText>
      </S.TabItem>
      <S.TabItem>
        <Icon name="chat-bubble-outline" size={24} color="#FFF" />
        <S.TabText>Cobrar</S.TabText>
      </S.TabItem>
      <S.TabItem>
        <Icon name="arrow-downward" size={24} color="#FFF" />
        <S.TabText>Depositar</S.TabText>
      </S.TabItem>
      <S.TabItem>
        <Icon name="arrow-upward" size={24} color="#FFF" />
        <S.TabText>Transferir</S.TabText>
      </S.TabItem>
      <S.TabItem>
        <Icon name="lock" size={24} color="#FFF" />
        <S.TabText>Bloquear Cartão</S.TabText>
      </S.TabItem>
    </S.TabsContainer>
  </S.Container>
)

export default Tabs
