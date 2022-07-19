import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useOrientation} from '../../hooks/useOrientation';
import {isTablet} from '../../responsive/checkOrientation';
import WebView from 'react-native-webview';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

const VideoLesson = ({route, navigation}) => {
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
            flex: 1,
          }}>
          <WebView
            source={{uri: itemVideo.VideoUrl}}
            allowsBackForwardNavigationGestures
          />
        </View>
      ) : (
        <View
          style={{
            height: orientation.isPortrait ? width : height,
            width: orientation.isPortrait ? height : width,
            flex: 1,
          }}>
          <WebView
            source={{uri: itemVideo.VideoUrl}}
            allowsBackForwardNavigationGestures
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B792DD',
    flex: 1,
  },
});

export default VideoLesson;
