import { Dimensions, FlatList, Image, ScrollView, StyleSheet } from "react-native";
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

const ncols = ()=> {
	if(width>700) return 4
	else if(width>500) return 3
	else if(width>325) return 2
	else return 1
}

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
	const [cols, setCols] = useState(ncols())
	const { data, isLoading, setPath } = useFetch("now_playing");
	const theme = useTheme();
	const [active, setActive] = useState<string>("now_playing");
	// Dimensions.addEventListener('change', ()=> {
	// 	const width = Dimensions.get("window").width
	// 	if(width>700) setCols(4)
	// 	else if(width>500) setCols(3)
	// 	else if(width>325) setCols(2)
	// 	else setCols(1)
	// })

	useEffect(() => {
		console.log(data);
	}, [data]);

  const renderItem = ({ item }: any) => {
    return (
      <MovieCard
        item={item}
        size={cols}
      />
    );
  };

	return (
		<View style={styles.container}>
			<TopSlider tabs={homeTabs} active={active} setPath={setPath} setActive={setActive} />
			<ScrollView style={[tw`h-full w-[100%]`]}>
				<FlatList style={tw``} data={data?.results} keyExtractor={(item: any) => item.alt}
         			renderItem={renderItem} numColumns={cols} />
					{/* {movies?.results?.map((movie: any) => (
						<MovieCard movie={movie} />
					))} */}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "column",
		width: width,
		height: height,
	},
})