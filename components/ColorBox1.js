import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[boxColor, styles.box]}>
      <Text style={styles.boxText}>
        {colorName}:{colorHex}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',

    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
});
export default ColorBox;
