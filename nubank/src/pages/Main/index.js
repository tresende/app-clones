import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import * as S from './styles'

const Main = () => {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Menu />
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>
          <S.Card
            style={{
              transform: [
                {
                  translateY
                }
              ]
            }}
          >
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
        </PanGestureHandler>
      </S.Content>
      <Tabs />
    </S.Container>
  )
}

export default Main
