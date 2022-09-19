import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import useTheme from '../hooks/useTheme';
import TopSlider from '../components/TopSlider';
import { movieTabs } from '../utils/tabs';

export default function Movies() {
  const { text,} = useTheme()
  const [active, setActive] = useState('28')
  return (
    <View style={styles.container}>
      <TopSlider tabs={movieTabs} active={active} setActive={setActive} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
