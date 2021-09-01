import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center', margin: '0 30px' }
})``

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`

export const Nav = styled.View`
  width: 300;
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
`

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`
export const NavText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 15px;
`

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`
export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`
