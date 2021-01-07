import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 450,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default ColorPalette;
