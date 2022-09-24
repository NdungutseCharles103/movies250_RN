import { FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import useTheme from '../hooks/useTheme';
import TopSlider from '../components/TopSlider';
import { movieTabs } from '../utils/tabs';
import { useFetch } from '../hooks/useFetch';
import tw from 'twrnc';
import { ncols } from './Home';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  const { text,} = useTheme()
  const [active, setActive] = useState('28')
  const {data, setData, setPath} = useFetch('discover/movie?with_genres=28', 'GET' ,{ adds: `&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${active}&with_watch_monetization_types=flatrate`})
  const [cols, setCols] = useState(ncols());

  const renderItem = ({item}: any) => {
    return <MovieCard size={cols} item={item} />
  }

  useEffect(()=> {
    console.log(data);
    },[data])
    return (
    <View style={[tw`flex items-center flex-col p-2`]}>
      <TopSlider
        tabCategory='discover/movie/'
        genre setPath={setPath}
       tabs={movieTabs} active={active} setActive={setActive} />
			<View style={[tw`pb-5`, { height: '95%', width: '100%' }]} >
				<FlatList style={tw``} data={data?.results} keyExtractor={(item: any) => item.id}
         			renderItem={renderItem} numColumns={cols} />
			</View>
		</View>
  );
}
