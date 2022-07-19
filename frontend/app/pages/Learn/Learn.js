import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  LogBox,
} from 'react-native';
import {ImageBackground, Animated} from 'react-native';
import image from '../../../image/eduhome.png';
import imageBackgroundPaper from '../../../image/backgroundpaper.png';
import imageGhim from '../../../image/ghim1.png';
import imageBack from '../../../image/back.png';
import imageRight from '../../../image/right.png';
import CardLession from '../../components/CardLesson';
import {useOrientation} from '../../hooks/useOrientation';
import {isTablet} from '../../responsive/checkOrientation';
import {ScrollView} from 'react-native';
import {dataTheme} from '../../../data/dataTheme';
import stylesTablet from './styles.tablet';
import stylesMobile from './styles.mobile';
import {db} from '../../../config/firebase-config.js';
import {ref, onValue} from 'firebase/database';
import SQLite from 'react-native-sqlite-storage';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

// const db = SQLite.openDatabase(
//   {
//     name: 'dataTheme',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log(error);
//   },
// );

const Learn = ({navigation}) => {
  // disable warning display in debug
  console.disableYellowBox = true;
  LogBox.ignoreAllLogs(true);
  // variable check orientation portrait and landscape
  const orientation = useOrientation();
  // variable check key in Flatlist when render
  const [orientation1, setOrientation] = useState('');

  const [data, setData] = useState('');
  const window = useWindowDimensions();

  const getOrientation = () => {
    if (window.height < window.width) {
      setOrientation('LANDSCAPE');
    } else {
      setOrientation('PORTRAIT');
    }
    return orientation1;
  };

  useEffect(() => {
    getOrientation();
    // getData();
  });

  // const getData = () => {
  //   db.transaction(tx => {
  //     tx.executeSql('SELECT * FROM dataTheme');
  //   });
  // };

  // Custom scrollBar
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  function getData() {
    return onValue(ref(db, '/dataTheme'), function (snapshot) {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        array.push({
          Id: childSnapshot.Id,
          Image: childData.Image,
          ImageBackground: childData.ImageBackground,
          Title: childData.Title,
          Percent: childData.Percent,
          Name: childData.Name,
          DataLesson: childData.DataLesson,
        });
      });
      console.log(array);
      // setData(array);
    });
  }

  console.log('ccccc', getData());

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor="white" translucent={true} hidden={true} />

      {/*  // Check and handle device is Tablet */}
      {isTablet() ? (
        // Image background paper of Tablet
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={stylesTablet.imageBackground}>
          {/* Header Bar Background of Tablet */}
          <View
            style={[
              stylesTablet.backgroundHeader,
              {
                height: orientation.isPortrait ? 0.17 * height : 0.18 * height,
              },
            ]}>
            <View style={stylesTablet.containerBgHeader}>
              {/* Button Back */}
              <View
                style={[
                  stylesTablet.ctnImgBack,
                  {
                    top: orientation.isPortrait ? height * 0.005 : 0,
                    left: orientation.isPortrait ? height * 0.03 : width * 0.02,
                  },
                ]}>
                <Image style={stylesTablet.imageBack} source={imageBack} />
              </View>

              {/* Title content */}
              <View
                style={[
                  stylesTablet.ctnTitleContent,
                  {
                    marginTop: orientation.isPortrait
                      ? -0.25 * (0.2 * height)
                      : -0.3 * (0.2 * height),
                  },
                ]}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: orientation.isPortrait
                      ? (0.035 * width) / 2
                      : (0.035 * width) / 2,
                  }}>
                  i-Learn Smart Start Grade 3
                </Text>
                <Image
                  style={[
                    stylesTablet.imageRight,
                    {
                      width: orientation.isPortrait
                        ? 0.015 * width
                        : 0.015 * width,
                      height: orientation.isPortrait
                        ? 0.015 * width
                        : 0.015 * width,
                    },
                  ]}
                  source={imageRight}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: orientation.isPortrait
                      ? (0.035 * width) / 2
                      : (0.035 * width) / 2,
                  }}>
                  Video Lesson
                </Text>
              </View>
            </View>

            {/* Background fake */}
            <View style={stylesTablet.backgroundFake}></View>
          </View>

          <View style={{width: '100%', height: '100%', position: 'relative'}}>
            {/* Image ghim */}
            <Image
              style={[
                stylesTablet.imageGhim,
                {
                  left: orientation.isPortrait ? height * 0.008 : width * 0.018,
                  top: orientation.isPortrait ? -width * 0.013 : -width * 0.016,
                },
              ]}
              source={imageGhim}
            />
            {/* Frame Rectangle */}
            <View
              style={[
                stylesTablet.styleRectangle,
                {
                  width: orientation.isPortrait ? height * 0.4 : width * 0.43,
                  height: orientation.isPortrait ? width * 0.5 : height * 0.33,
                  left: orientation.isPortrait ? height * 0.03 : width * 0.028,
                  top: orientation.isPortrait ? -width * 0.005 : -height * 0.03,
                  transform: orientation.isPortrait
                    ? [{rotate: '-2deg'}]
                    : [{rotate: '-3deg'}],
                },
              ]}
            />
            {/* Frame Rectangle 1 */}
            <View
              style={[
                stylesTablet.styleRectangle1,
                {
                  width: orientation.isPortrait ? width * 0.5 : width * 0.5,
                  height: orientation.isPortrait ? height * 0.8 : height * 0.6,
                  right: orientation.isPortrait ? width * 0.015 : width * 0.02,
                  top: orientation.isPortrait ? height * 0.1 : height * 0.1,
                },
              ]}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                paddingLeft: orientation.isPortrait
                  ? height * 0.04
                  : width * 0.04,
                paddingRight: orientation.isPortrait
                  ? -height * 0.05
                  : width * 0.04,
                marginRight: orientation.isPortrait ? -height * 0.5 : 0,
                paddingTop: orientation.isPortrait ? 10 : 0,
                paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
              }}>
              {/* Image Background content */}
              <ImageBackground
                style={{
                  width: orientation.isPortrait ? height * 0.925 : '100%',
                  height: orientation.isPortrait ? width * 0.86 : '100%',
                }}
                source={imageBackgroundPaper}
                resizeMode={orientation.isPortrait ? 'stretch' : 'stretch'}>
                <View
                  style={{
                    width: orientation.isPortrait
                      ? height * 0.98
                      : width - 2 * (width * 0.06),
                    height: orientation.isPortrait
                      ? width * 0.9
                      : height - 2 * (height * 0.04),
                    paddingRight: orientation.isPortrait ? height * 0.11 : 0,
                    paddingLeft: orientation.isPortrait
                      ? height * 0.11
                      : width * 0.07,
                    paddingTop: orientation.isPortrait
                      ? width * 0.03
                      : height * 0.04,
                    paddingBottom: height * 0.2,
                    flexDirection: 'row',
                    // backgroundColor: "blue",
                  }}>
                  {/* Scroll and display list CardLesson by FlatList on Tablet*/}
                  <ScrollView
                    contentContainerStyle={{paddingRight: 0}}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(_, height) => {
                      setCompleteScrollBarHeight(height);
                    }}
                    onLayout={({
                      nativeEvent: {
                        layout: {height},
                      },
                    }) => {
                      setVisibleScrollBarHeight(height);
                    }}
                    onScroll={Animated.event(
                      [
                        {
                          nativeEvent: {
                            contentOffset: {y: scrollIndicator},
                          },
                        },
                      ],
                      {useNativeDriver: false},
                    )}>
                    {/* Display each card items */}
                    <FlatList
                      data={dataTheme}
                      numColumns={orientation1 == 'LANDSCAPE' ? 4 : 2}
                      keyExtractor={item => item}
                      key={orientation1}
                      renderItem={({item, index}) => (
                        <CardLession
                          item={item}
                          index={index}
                          key={index}
                          navigation={navigation}
                        />
                      )}
                    />
                  </ScrollView>
                  {/* Scroll Bar  */}
                  <View style={stylesTablet.viewContentScroll}>
                    <Animated.View
                      style={[
                        stylesTablet.viewContentTotalScroll,
                        {
                          height: scrollIndicatorSize,
                          transform: [{translateY: scrollIndicatorPosition}],
                        },
                      ]}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      ) : (
        // Check and handle device is Mobile
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={stylesMobile.imageBackground}>
          <View
            style={[
              stylesMobile.backgroundHeader,
              {
                height: orientation.isPortrait ? 0.17 * height : 0.18 * height,
              },
            ]}>
            <View style={stylesMobile.containerBgHeader}>
              <View
                style={[
                  stylesMobile.ctnImgBack,
                  {
                    top: orientation.isPortrait ? height * 0.015 : 0,
                    left: orientation.isPortrait ? height * 0.03 : width * 0.02,
                  },
                ]}>
                <Image style={stylesMobile.imageBack} source={imageBack} />
              </View>

              <View
                style={[
                  stylesMobile.ctnTitleContent,
                  {
                    marginTop: orientation.isPortrait
                      ? -0.15 * (0.2 * height)
                      : -0.3 * (0.2 * height),
                  },
                ]}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: orientation.isPortrait
                      ? (0.035 * width) / 2
                      : (0.035 * width) / 2,
                  }}>
                  i-Learn Smart Start Grade 3
                </Text>
                <Image
                  style={[
                    stylesMobile.imageRight,
                    {
                      width: orientation.isPortrait
                        ? 0.012 * width
                        : 0.012 * width,
                      height: orientation.isPortrait
                        ? 0.012 * width
                        : 0.012 * width,
                      marginHorizontal: orientation.isPortrait
                        ? 0.01 * width
                        : 0.03 * width,
                    },
                  ]}
                  source={imageRight}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: orientation.isPortrait
                      ? (0.035 * width) / 2
                      : (0.035 * width) / 2,
                  }}>
                  Video Lesson
                </Text>
              </View>
            </View>

            <View style={stylesMobile.backgroundFake}></View>
          </View>

          <View style={{width: '100%', height: '100%', position: 'relative'}}>
            {/* Image Ghim */}
            <Image
              style={[
                stylesMobile.imageGhim,
                {
                  left: orientation.isPortrait ? height * 0.004 : width * 0.02,
                  top: orientation.isPortrait ? -width * 0.013 : -width * 0.016,
                },
              ]}
              source={imageGhim}
            />
            {/* Frame Rectangle */}
            <View
              style={[
                stylesMobile.styleRectangle,
                {
                  width: orientation.isPortrait ? height * 0.4 : width * 0.43,
                  height: orientation.isPortrait ? width * 0.5 : height * 0.33,
                  left: orientation.isPortrait ? height * 0.03 : width * 0.028,
                  top: orientation.isPortrait ? -width * 0.005 : -height * 0.03,
                  transform: orientation.isPortrait
                    ? [{rotate: '-2deg'}]
                    : [{rotate: '-3deg'}],
                },
              ]}
            />
            {/* Frame Rectangle1 */}
            <View
              style={[
                stylesMobile.styleRectangle1,
                {
                  width: orientation.isPortrait ? width * 0.3 : width * 0.5,
                  height: orientation.isPortrait ? height * 0.9 : height * 0.6,
                  right: orientation.isPortrait ? width * 0.01 : width * 0.02,
                  top: orientation.isPortrait ? height * 0.1 : height * 0.1,
                },
              ]}
            />

            <View
              style={{
                width: '100%',
                height: '100%',
                paddingLeft: orientation.isPortrait
                  ? height * 0.04
                  : width * 0.04,
                paddingRight: orientation.isPortrait
                  ? -height * 0.05
                  : width * 0.04,
                marginRight: orientation.isPortrait ? -height * 0.5 : 0,
                paddingTop: orientation.isPortrait ? 10 : 0,
                paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
              }}>
              {/* image background paper */}
              <ImageBackground
                style={{
                  width: orientation.isPortrait ? height * 0.925 : '100%',
                  height: orientation.isPortrait ? width * 0.86 : '100%',
                }}
                source={imageBackgroundPaper}
                resizeMode={orientation.isPortrait ? 'stretch' : 'stretch'}>
                <View
                  style={{
                    width: orientation.isPortrait
                      ? height * 0.98
                      : width - 2 * (width * 0.06),
                    height: orientation.isPortrait
                      ? width * 0.9
                      : height - 2 * (height * 0.04),
                    paddingRight: orientation.isPortrait
                      ? height * 0.11
                      : width * 0.01,
                    paddingLeft: orientation.isPortrait
                      ? height * 0.11
                      : width * 0.07,
                    paddingTop: orientation.isPortrait
                      ? width * 0.03
                      : height * 0.04,
                    paddingBottom: height * 0.2,
                    flexDirection: 'row',
                    // backgroundColor: "blue"
                  }}>
                  {/* Scroll and display list CardLesson by FlatList on Mobile*/}
                  <ScrollView
                    contentContainerStyle={{paddingRight: 0}}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(_, height) => {
                      setCompleteScrollBarHeight(height);
                    }}
                    onLayout={({
                      nativeEvent: {
                        layout: {height},
                      },
                    }) => {
                      setVisibleScrollBarHeight(height);
                    }}
                    onScroll={Animated.event(
                      [
                        {
                          nativeEvent: {
                            contentOffset: {y: scrollIndicator},
                          },
                        },
                      ],
                      {useNativeDriver: false},
                    )}>
                    {/* Display each card items */}
                    {/* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                      {dataTheme.map((item, index) => {
                        return (
                          <CardLession
                            item={item}
                            index={index}
                            key={index}
                            navigation={navigation}
                          />
                        );
                      })}
                    </View> */}
                    <FlatList
                      data={dataTheme}
                      numColumns={orientation1 == 'LANDSCAPE' ? 4 : 2}
                      keyExtractor={item => item}
                      key={orientation1}
                      renderItem={({item, index}) => (
                        <CardLession
                          item={item}
                          index={index}
                          key={index}
                          navigation={navigation}
                        />
                      )}
                    />
                  </ScrollView>
                  {/* Scroll Bar */}
                  <View style={stylesMobile.viewContentScroll}>
                    <Animated.View
                      style={[
                        stylesMobile.viewContentTotalScroll,
                        {
                          height: scrollIndicatorSize,
                          transform: [{translateY: scrollIndicatorPosition}],
                        },
                      ]}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B792DD',
  },
});
export default Learn;
