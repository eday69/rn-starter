import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
      {/*<Text style={styles.textOneStyle}>Child #1</Text>*/}
      {/*<Text style={styles.textTwoStyle}>Child #2</Text>*/}
      {/*<Text style={styles.textThreeStyle}>Child #3</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 240,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 120,
    width: 120,
    backgroundColor: 'lightpink',
    borderWidth: 1,
    borderColor: 'red'
  },
  viewTwoStyle: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'palegreen',
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'lavender',
  },
  // textOneStyle: {
  //   borderWidth: 1,
  //   borderColor: 'red'
  // },
  // textTwoStyle: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   ...StyleSheet.absoluteFillObject
  // },
  // textThreeStyle: {
  //   borderWidth: 1,
  //   borderColor: 'red'
  // },
});

export default BoxScreen;

