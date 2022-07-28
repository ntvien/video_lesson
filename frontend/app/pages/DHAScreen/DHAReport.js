import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DHAReport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleText}>Report</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default DHAReport;
