const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const Colors: { dark: ThemeColors, light: ThemeColors} = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export interface ThemeColors {
  text: string,
  background: string,
  tint: string,
  tabIconDefault: string,
  tabIconSelected: string,
}

export default Colors
