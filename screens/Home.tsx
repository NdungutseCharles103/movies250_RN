import { FlatList, Image, ScrollView, StyleSheet } from "react-native";
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

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
	const [movies, loading] = useFetch("popular");
	const theme = useTheme();
	const [active, setActive] = useState<string>("Trending");

	useEffect(() => {
		console.log(movies);
	}, [movies]);

  const renderItem = ({ item }: any) => {
    return (
      <MovieCard
        item={item}
        size={4}
      />
    );
  };

	return (
		<View style={styles.container}>
			<TopSlider tabs={homeTabs} active={active} setActive={setActive} />
			<ScrollView style={[tw`h-full w-[100%]`]}>
				<FlatList data={movies?.results} keyExtractor={(item: any) => item.alt}
         renderItem={renderItem} numColumns={4} />
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