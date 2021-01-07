import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.text, styles.box]}>
        <Text>Hello World!!!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
export default App1;
