import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4D9',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',
  },
  caja1: {
    // flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    // alignSelf: 'center',
  },
  caja2: {
    // flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    // alignSelf: 'flex-start',
  },
  caja3: {
    // flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    // alignSelf: 'flex-end',
  },
});
