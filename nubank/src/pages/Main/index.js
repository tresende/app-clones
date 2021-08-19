import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Tabs from '~/components/Tabs'
import Header from '../../components/Header'

import * as S from './styles'

const Main = () => (
  <S.Container>
    <Header />
    <S.Content>
      <S.Card>
        <S.CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </S.CardHeader>
        <S.CardContent>
          <S.Title>Saldo Disponível</S.Title>
          <S.Description>R$ 12.123,23</S.Description>
        </S.CardContent>
        <S.CardFooter>
          <S.Annotation>Transferencia enviada por Camila Rodrigues hoje as 08:39h</S.Annotation>
        </S.CardFooter>
      </S.Card>
    </S.Content>
    <Tabs />
  </S.Container>
)

export default Main
