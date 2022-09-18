import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import CText from '../constants/Text'

const MovieCard = ({item, size}: any) => {
  return (
    <View style={[tw`rounded-lg w-1/${size}`, 
    {}]}>
      <CText>{item.title}</CText>
    </View>
  )
}

export default MovieCard