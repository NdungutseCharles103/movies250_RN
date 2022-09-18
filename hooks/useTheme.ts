import Colors, { ThemeColors } from './../constants/Colors';
import useColorScheme from "./useColorScheme";


export default function useTheme(): ThemeColors {
    const colorSheme = useColorScheme()
    return Colors[colorSheme]
}