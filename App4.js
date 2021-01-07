import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Foods = (props) => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const FOODS = ['Apples', 'Broccoli', 'Cookies', 'Doritos', 'Eclairs'];

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={FOODS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Foods name={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
