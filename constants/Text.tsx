import { TextProps, View, Text } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'

const CText = (props: TextProps) => {
    const {  children, style} = props
    const theme = useTheme()
    const passedStyles = Array.isArray(style)? Object.assign({}, ...style): style
  return (
      <Text style={[{ color:  theme.text}, {...passedStyles}]}>
        {children}
      </Text>
  )
}

export default CText