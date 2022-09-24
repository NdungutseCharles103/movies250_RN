import {
	Dimensions,
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import TopSlider from "../components/TopSlider";
import { homeTabs } from "../utils/tabs";
import { useFetch } from "../hooks/useFetch";
import tw from "twrnc";
import useTheme from "../hooks/useTheme";
import { height, width } from "../constants/Layout";
import MovieCard from "../components/MovieCard";

export const ncols = () => {
	if (width > 700) return 4;
	else if (width > 500) return 3;
	else if (width > 325) return 2;
	else return 1;
};

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
	const [cols, setCols] = useState(ncols());
	const { data, isLoading, setPath } = useFetch("movie/now_playing");
	const theme = useTheme();
	const [active, setActive] = useState<string>("now_playing");

	const renderItem = ({ item }: any) => {
		return <MovieCard item={item} size={cols} />;
	};

	// useEffect(()=> {
	// 	console.log(data);
	// },[data])

	return (
		<View style={styles.container}>
			<TopSlider
				tabs={homeTabs}
				active={active}
				setPath={setPath}
				setActive={setActive}
				tabCategory="movie/"
			/>
			{/* <ScrollView style={[tw`h-full w-[100%]`]}> */}
			<View style={[tw`pb-5`, { height: '95%', width: '100%' }]} >
				<FlatList style={tw``} data={data?.results} keyExtractor={(item: any) => item.id}
         			renderItem={renderItem} numColumns={cols} />
			</View>
			{/* </ScrollView> */}
			{/* <Video
				source={{
					uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4",
				}}
				volume={10}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		display: 'flex',
		flexDirection: "column",
		// width: width,
		// height: height,
	},
});
