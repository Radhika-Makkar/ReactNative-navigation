import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>

        <View style={[styles.cyanBox, styles.box]}>
          <Text style={styles.boxText}>Cyan:#2aa198</Text>
        </View>
        <View style={[styles.blueBox, styles.box]}>
          <Text style={[styles.boxText]}>Blue:#268bd2 </Text>
        </View>
        <View style={[styles.magentaBox, styles.box]}>
          <Text style={[styles.boxText]}>Magenta:#d33682 </Text>
        </View>
        <View style={[styles.orangeBox, styles.box]}>
          <Text style={styles.boxText}>Orange:#cb4b16 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',

    alignItems: 'center',
  },
  cyanBox: {
    backgroundColor: '#2aa198',
  },
  blueBox: {
    backgroundColor: '#268bd2',
  },
  magentaBox: {
    backgroundColor: '#d33682',
  },
  orangeBox: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
