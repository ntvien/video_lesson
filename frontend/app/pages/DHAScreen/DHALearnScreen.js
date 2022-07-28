import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DHALearn from './DHALearn';
import DHADetailLesson from './DHADetailLesson';

const Stack = createStackNavigator();

const DHALearnScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={DHALearn} name="DHALearn" />
      <Stack.Screen component={DHADetailLesson} name="DHADetailLesson" />
    </Stack.Navigator>
  );
};

export default DHALearnScreen;
