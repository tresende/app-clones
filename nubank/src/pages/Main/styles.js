import { Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()};
  background: #8b10ae;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  z-index: 5;
  max-height: 400px;
`

export const Card = styled(Animated.View)`
  background: #fff;
  flex: 1;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`
export const CardFooter = styled.View`
  border-radius: 4px;
  padding: 30px;
  background: #eee;
`

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`
export const Description = styled.Text`
  font-size: 32px;
  color: #333;
`
export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`
