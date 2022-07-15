import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Learn from "../pages/Learn/Learn";
import DetailLearn from "../pages/DetailLearn/DetailLearn";
import VideoLesson from "../pages/VideoLessson/VideoLesson";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      style={styles.container}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Learn" component={Learn} />
      <Stack.Screen name="DetailLearn" component={DetailLearn} />
      <Stack.Screen name="VideoLesson" component={VideoLesson} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default AppNavigator;
