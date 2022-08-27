import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    // padding: 10,
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    marginHorizontal: 20,
    // backgroundColor: 'red',
    borderWidth: 10,
  },
});
