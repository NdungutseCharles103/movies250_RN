import { View, Text, Image } from 'react-native'
import React from 'react'
import CText from '../constants/Text'
import tw from 'twrnc'
import { image_path } from '../utils/apiCallMethods'

const TvCard = ({size, item}: any) => {
    const w = (1/size*100) -2
    return (
      <View key={item.id} style={[tw`rounded-lg m-1 w-[${w}%]`, 
      {}]}>
        <Image style={tw`w-full h-[70] rounded-xl`} resizeMode="cover"
         source={{uri: image_path+item.poster_path}} />
        <CText style={tw`text-center`}>{item.title}</CText>
        {/* <CText>{image_path+item.poster_path}</CText> */}
      </View>
  )
}

export default TvCard