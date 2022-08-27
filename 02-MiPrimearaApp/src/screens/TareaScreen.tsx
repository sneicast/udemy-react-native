import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    // flex: 2,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // top: 100,
  },
  cajaNaranja: {
    // flex: 2,
    width: 100,
    height: 100,
    // flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    // alignSelf: 'center',
    // left: 100,
    top: 50,
  },
  cajaAzul: {
    // flex: 4,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    // alignSelf: 'center',
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    // flex: 1,
  },
});
