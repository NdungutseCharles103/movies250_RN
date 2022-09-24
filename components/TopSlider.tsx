import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Tab } from "../utils/tabs";
import useTheme from "../hooks/useTheme";
import CText from "../constants/Text";
import { width } from "../constants/Layout";

type Props = {
	tabs: Tab[];
	active: string;
	setActive: React.Dispatch<string>;
	setPath?: React.Dispatch<string>;
	tabCategory: string;
	genre?: boolean;
};

const TopSlider: React.FC<Props> = ({ tabs, active, setActive, setPath , tabCategory, genre}) => {
	const theme = useTheme();
	const [cat, setCat] = React.useState<string>(tabCategory);

	useEffect(() => {
		if(genre) {
			setCat('discover/movie')
		}
	}, [])
	
	return (
		<View
			style={[tw`h-8 my-2`]}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{tabs.map((tab: Tab, i: number) => (
					<Pressable
						onPress={() => {
							setPath && setPath(cat+tab.cat);
							setActive(tab.cat);
						}}
						key={i}
					>
						<CText
							style={tw`rounded-xl items-center flex px-3 py-1 ${
								tab.cat === active
									? `bg-[${theme.text}] text-[${theme.background}]`
									: ""
							}`}
						>
							{tab.name}
						</CText>
					</Pressable>
				))}
			</ScrollView>
		</View>
	);
};

export default TopSlider;
