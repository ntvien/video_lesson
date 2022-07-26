import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

import {isTablet} from '../../responsive/checkOrientation';
import {useOrientation} from '../../hooks/useOrientation';
import WebView from 'react-native-webview';
import HTMLFlipBook from 'react-pageflip';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

function ITSScreen({route, navigation}) {
  const orientation = useOrientation();
  const handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const {url} = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        {' '}
        {/* ref required  */}
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" translucent={true} hidden={true} />
      {isTablet() ? (
        // Check and handle device is Tablet
        <View style={{width: orientation.isPortrait ? width : height}}>
          <WebView
            ref={ref => (this.WebView = ref)}
            source={{uri: ''}}
            // onNavigationStateChange={this.handleWebViewNavigationStateChange}
            style={{width: width, height: height}}>
            <HTMLFlipBook width={300} height={500}>
              <Page number="1">Page text</Page>
              <Page number="2">Page text</Page>
              <Page number="3">Page text</Page>
              <Page number="4">Page text</Page>
            </HTMLFlipBook>
          </WebView>
        </View>
      ) : (
        // Check and handle device is Mobile
        <View style={{width: orientation.isPortrait ? width : height}}>
          <WebView
            style={{
              height: orientation.isPortrait ? width : height,
              width: orientation.isPortrait ? height : width,
              top: 0,
              position: 'relative',
              bottom: 0,
            }}></WebView>
        </View>
      )}
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

export default ITSScreen;
