import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ExampleStartScreen = ({ onPress }) => (
  <View style={styles.blankPage}>
    <Text style={styles.title}>Your Test App</Text>
    <Button title="Enter Your World!" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  blankPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ExampleStartScreen;