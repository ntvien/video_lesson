import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { useOrientation } from "../../hooks/useOrientation";
import { isTablet } from "../../responsive/checkOrientation";
import WebView from "react-native-webview";

const width = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const height = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);

const VideoLesson = ({ route, navigation }) => {
  const itemVideo = route.params.item;
  console.disableYellowBox = true;
  const orientation = useOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor="white" translucent={true} hidden={true} />

      {isTablet() ? (
        <View
          style={{
            height: orientation.isPortrait ? width : height,
            width: orientation.isPortrait ? height : width,
            flex:1
          }}
        >
          <WebView
            source={{ uri: itemVideo.VideoUrl }}
            allowsBackForwardNavigationGestures
          />
        </View>
      ) : (
        <View
          style={{
            height: orientation.isPortrait ? width : height,
            width: orientation.isPortrait ? height : width,
            flex:1
          }}
        >
          <WebView
            source={{ uri: itemVideo.VideoUrl }}
            
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B792DD",
    flex: 1,
    height: Dimensions.get("window").height,
  },
  imageBackground: {
    flex: 1,
  },
  imageBack: {
    width: (0.1 * width) / 3,
    height: (0.1 * width) / 3,
    resizeMode: "cover",
    marginTop: -0.3 * (0.2 * height),
  },
  imageRight: {
    width: 10,
    height: 10,
    marginHorizontal: 0.03 * width,
    resizeMode: "contain",
  },
  imageGhim: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "cover",
    position: "absolute",
    zIndex: 1,
  },
  styleRectangle: {
    backgroundColor: "#35ABEB",
    borderWidth: width * 0.0075,
    borderColor: "#ffffff",
    borderRadius: width * 0.035,
    transform: [{ rotate: "-3deg" }],
    position: "absolute",
  },
  styleRectangle1: {
    backgroundColor: "#35ABEB",
    borderWidth: width * 0.01,
    borderColor: "#ffffff",
    borderRadius: width * 0.08,
    transform: [{ rotate: "3.5deg" }],
    position: "absolute",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoLesson;
