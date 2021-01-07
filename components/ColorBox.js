import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <SafeAreaView>
      <View style={[Styles.box, boxColor]}>
        <Text style={[Styles.textBox, textStyle]}>
          {colorName}
          {hexCode}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  textBox: {
    color: 'white',
    fontWeight: 'bold',
  },

  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
});

export default ColorBox;
