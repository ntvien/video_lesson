import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DHAReport from './DHAReport';

import {StatusBar, Image, StyleSheet} from 'react-native';
import DHALearnScreen from './DHALearnScreen';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 60,
    height: 35,
  },
});

const DHAScreen = () => {
  return (
    <Tab.Navigator style={{paddingTop: StatusBar.currentHeight}}>
      <Tab.Screen
        options={{
          title: ({color, focused}) => (
            <Image
              style={styles.tinyLogo}
              source={require('../../../image/learn.png')}
            />
          ),
        }}
        component={DHALearnScreen}
        name="DHALearnScreen"
      />
      <Tab.Screen
        options={{
          title: ({color, focused}) => (
            <Image
              style={styles.tinyLogo}
              source={require('../../../image/report.png')}
            />
          ),
        }}
        component={DHAReport}
        name="DHAReport"
      />
    </Tab.Navigator>
  );
};

export default DHAScreen;
