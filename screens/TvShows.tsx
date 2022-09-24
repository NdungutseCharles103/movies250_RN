import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import TopSlider from "../components/TopSlider";
import { useFetch } from "../hooks/useFetch";
import TvCard from "../components/TvCard";
import { ncols } from "./Home";
import { tvTabs } from "../utils/tabs";

const TvShows = () => {
    const [active, setActive] = React.useState('on_the_air')
    const {data, setData, setPath} = useFetch('tv/on_the_air')
    const [cols, setCols] = useState(ncols());

    const renderItem = ({item}: any) => {
        return <TvCard size={cols} item={item} />
    }

    useEffect(()=> {
		console.log(data);
	},[data])

	return (
		<View style={[tw`flex items-center flex-col p-2`]}>
			<TopSlider tabCategory="tv/" tabs={tvTabs} active={active} setActive={setActive} />
			<View style={[tw`pb-5`, { height: '95%', width: '100%' }]} >
				<FlatList style={tw``} data={data?.results} keyExtractor={(item: any) => item.id}
         			renderItem={renderItem} numColumns={cols} />
			</View>
		</View>
	);
};

export default TvShows;
