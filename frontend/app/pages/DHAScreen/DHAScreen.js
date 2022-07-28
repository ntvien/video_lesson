import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

function DHAScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" translucent={true} hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: height,
  },
});

export default DHAScreen;
