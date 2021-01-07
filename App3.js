import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';
const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
