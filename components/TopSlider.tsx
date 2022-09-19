import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React from "react";
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
};

const TopSlider: React.FC<Props> = ({ tabs, active, setActive, setPath }) => {
	const theme = useTheme();

	return (
		<ScrollView
			style={[tw`h-8 my-2`]}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{tabs.map((tab: Tab, i: number) => (
				<Pressable onPress={() =>{
					 setPath && setPath(tab.cat)
					 setActive(tab.cat)}}
					 key={i}>
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
	);
};

export default TopSlider;
