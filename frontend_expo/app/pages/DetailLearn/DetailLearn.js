import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { ImageBackground, Animated } from "react-native";
import image from "../../../image/eduhome.png";
import imageBackgroundPaper2 from "../../../image/backgroundpaper2.png";
import hook from "../../../image/hook.png";

import imageGhim1 from "../../../image/ghim2.png";
import imageBack from "../../../image/back.png";
import imageRight from "../../../image/right.png";
import { TouchableOpacity } from "react-native";
import CardItemDetail from "../../components/CardItemDetail";
import CardLessonDetail from "../../components/CardLessonDetail";
import { useOrientation } from "../../hooks/useOrientation";
import { ScrollView } from "react-native";
import { isTablet } from "../../responsive/checkOrientation";
import stylesTablet from "./styles.tablet";
import stylesMobile from "./styles.mobile";

const width = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const height = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);

function DetailLearn({ route, navigation }) {
  const itemLesson = route.params.item;
  const indexLesson = route.params.index;
  // variable check orientation portrait and landscape
  const orientation = useOrientation();
  // variable check key in Flatlist when render
  const [orientation1, setOrientation] = useState("");
  const window = useWindowDimensions();
  const getOrientation = () => {
    if (window.height < window.width) {
      setOrientation("LANDSCAPE");
    } else {
      setOrientation("PORTRAIT");
    }
    return orientation1;
  };

  useEffect(() => {
    getOrientation();
  });
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
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      {isTablet() ? (
        // Check and handle device is Tablet
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={stylesTablet.imageBackground}
        >
          <View
            style={[
              stylesTablet.backgroundHeader,
              {
                height: orientation.isPortrait ? 0.17 * height : 0.18 * height,
              },
            ]}
          >
            <View style={stylesTablet.containerBgHeader}>
              <View
                style={[
                  stylesTablet.ctnImgBack,
                  {
                    top: orientation.isPortrait ? height * 0.015 : 0,
                    left: orientation.isPortrait ? height * 0.03 : width * 0.02,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.pop();
                  }}
                >
                  <Image style={stylesTablet.imageBack} source={imageBack} />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  stylesTablet.ctnTitleContent,
                  {
                    marginTop: orientation.isPortrait
                      ? -0.15 * (0.2 * height)
                      : -0.3 * (0.2 * height),
                  },
                ]}
              >
                {orientation.isPortrait ? (
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: orientation.isPortrait
                            ? (0.03 * width) / 2
                            : (0.035 * width) / 2,
                        }}
                      >
                        i-Learn Smart Start Grade 3
                      </Text>
                      <Image
                        style={[
                          stylesTablet.imageRight,
                          {
                            width: orientation.isPortrait
                              ? 0.012 * width
                              : 0.015 * width,
                            height: orientation.isPortrait
                              ? 0.012 * width
                              : 0.015 * width,
                            marginHorizontal: 0.02 * width,
                          },
                        ]}
                        source={imageRight}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          navigation.pop();
                        }}
                      >
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: orientation.isPortrait
                              ? (0.03 * width) / 2
                              : (0.035 * width) / 2,
                          }}
                        >
                          Video Lesson
                        </Text>
                      </TouchableOpacity>

                      <Image
                        style={[
                          stylesTablet.imageRight,
                          {
                            width: orientation.isPortrait
                              ? 0.012 * width
                              : 0.015 * width,
                            height: orientation.isPortrait
                              ? 0.012 * width
                              : 0.015 * width,
                            marginHorizontal: 0.02 * width,
                          },
                        ]}
                        source={imageRight}
                      />
                    </View>

                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.03 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
                      Theme 7 - Places and Directions
                    </Text>
                  </View>
                ) : (
                  <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.035 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
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

                    <TouchableOpacity
                      onPress={() => {
                        navigation.pop();
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: orientation.isPortrait
                            ? (0.035 * width) / 2
                            : (0.035 * width) / 2,
                        }}
                      >
                        Video Lesson
                      </Text>
                    </TouchableOpacity>

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
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.035 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
                      Theme 7 - Places and Directions
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View style={stylesTablet.backgroundFake}></View>
          </View>

          <View style={{ width: "100%", height: "100%", position: "relative" }}>
            <View
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: orientation.isPortrait
                  ? height * 0.04
                  : width * 0.04,
                paddingRight: orientation.isPortrait
                  ? -height * 0.05
                  : width * 0.04,
                marginRight: orientation.isPortrait ? -height * 0.5 : 0,
                paddingTop: orientation.isPortrait ? 10 : 0,
                paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
                // backgroundColor: "red"
              }}
            >
              {/* image hook of Tablet*/}
              <ImageBackground
                style={{
                  width:
                    orientation.isPortrait && isTablet
                      ? height * 0.85
                      : width * 0.83,
                  height:
                    orientation.isPortrait && isTablet
                      ? width * 0.025
                      : height * 0.05,
                  position: "absolute",
                  zIndex: 1,
                  left: orientation.isPortrait ? 0.07 * height : 0.09 * width,
                  top: orientation.isPortrait
                    ? -0.002 * width
                    : -0.0135 * width,
                }}
                source={hook}
                resizeMode={orientation.isPortrait ? "stretch" : "stretch"}
              ></ImageBackground>

              {/* image background paper of Tablet*/}

              <ImageBackground
                style={{
                  width: orientation.isPortrait ? height * 0.925 : "100%",
                  height: orientation.isPortrait ? width * 0.86 : "100%",
                }}
                source={imageBackgroundPaper2}
                resizeMode={orientation.isPortrait ? "stretch" : "stretch"}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifycontent: "center",
                    // backgroundColor: "red"
                  }}
                >
                  {/* Left content contain card item */}
                  <View style={stylesTablet.leftColumn}>
                    <CardItemDetail item={itemLesson} index={indexLesson} />
                  </View>
                  {/* vertical line */}
                  <View
                    style={[
                      stylesTablet.centerColumn,
                      {
                        marginTop: orientation.isPortrait
                          ? 0.18 * height
                          : 0.1 * height,
                      },
                    ]}
                  />
                  {/* Right content contain video lesson */}
                  <View
                    style={[
                      stylesTablet.rightColumn,
                      {
                        width: orientation.isPortrait ? width : width,
                        height: orientation.isPortrait
                          ? height
                          : height - height * 0.2,
                        paddingLeft: orientation.isPortrait
                          ? 0.03 * width
                          : 0.05 * width,
                        paddingRight: orientation.isPortrait
                          ? 0.02 * width
                          : 0.07 * width,
                        paddingTop: orientation.isPortrait ? 0 : 0.094 * height,
                        paddingBottom: orientation.isPortrait
                          ? 0
                          : 0.02 * height,
                        flexDirection: "row",
                        // backgroundColor: "#000000"
                      },
                    ]}
                  >
                    {/* Scroll and display list CardLessonDetail by FlatList on Tablet*/}
                    <ScrollView
                      contentContainerStyle={{ paddingRight: 0 }}
                      showsVerticalScrollIndicator={false}
                      scrollEventThrottle={16}
                      onContentSizeChange={(_, height) => {
                        setCompleteScrollBarHeight(height);
                      }}
                      onLayout={({
                        nativeEvent: {
                          layout: { height },
                        },
                      }) => {
                        setVisibleScrollBarHeight(height);
                      }}
                      onScroll={Animated.event(
                        [
                          {
                            nativeEvent: {
                              contentOffset: { y: scrollIndicator },
                            },
                          },
                        ],
                        { useNativeDriver: false }
                      )}
                    >
                      {/* Display each card items */}
                      <FlatList
                        data={itemLesson.DataLesson}
                        numColumns={orientation1 == "LANDSCAPE" ? 3 : 2}
                        keyExtractor={(item) => item}
                        key={orientation1}
                        renderItem={({ item, index }) => (
                          <CardLessonDetail
                            item={item}
                            index={index}
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
                            transform: [
                              { translateY: scrollIndicatorPosition },
                            ],
                          },
                        ]}
                      />
                    </View>
                  </View>
                </View>

                {/* image Ghim1 */}
                <Image
                  style={[
                    stylesTablet.imageGhim1,
                    {
                      left: orientation.isPortrait
                        ? -0.02 * width
                        : -0.022 * width,
                      bottom: orientation.isPortrait
                        ? 0.04 * height
                        : 0.05 * height,
                    },
                  ]}
                  source={imageGhim1}
                />
              </ImageBackground>
            </View>

            {/* </ScrollView> */}
          </View>
        </ImageBackground>
      ) : (
        // Check and handle device is Mobile
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={stylesMobile.imageBackground}
        >
          <View
            style={[
              stylesMobile.backgroundHeader,
              {
                height: orientation.isPortrait ? 0.18 * height : 0.18 * height,
              },
            ]}
          >
            <View style={stylesMobile.containerBgHeader}>
              <View
                style={[
                  stylesMobile.ctnImgBack,
                  {
                    top: orientation.isPortrait ? height * 0.015 : 0,
                    left: orientation.isPortrait ? height * 0.03 : width * 0.02,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.pop();
                  }}
                >
                  <Image style={stylesMobile.imageBack} source={imageBack} />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  stylesMobile.ctnTitleContent,
                  {
                    marginTop: orientation.isPortrait
                      ? -0.15 * (0.2 * height)
                      : -0.3 * (0.2 * height),
                  },
                ]}
              >
                {orientation.isPortrait ? (
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: orientation.isPortrait
                            ? (0.03 * width) / 2
                            : (0.035 * width) / 2,
                        }}
                      >
                        i-Learn Smart Start Grade 3
                      </Text>
                      <Image
                        style={[
                          stylesMobile.imageRight,
                          {
                            width: orientation.isPortrait
                              ? 0.01 * width
                              : 0.012 * width,
                            height: orientation.isPortrait
                              ? 0.01 * width
                              : 0.012 * width,
                            marginHorizontal: 0.01 * width,
                          },
                        ]}
                        source={imageRight}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          navigation.pop();
                        }}
                      >
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: orientation.isPortrait
                              ? (0.03 * width) / 2
                              : (0.035 * width) / 2,
                          }}
                        >
                          Video Lesson
                        </Text>
                      </TouchableOpacity>

                      <Image
                        style={[
                          stylesMobile.imageRight,
                          {
                            width: orientation.isPortrait
                              ? 0.01 * width
                              : 0.012 * width,
                            height: orientation.isPortrait
                              ? 0.01 * width
                              : 0.012 * width,
                            marginHorizontal: 0.01 * width,
                          },
                        ]}
                        source={imageRight}
                      />
                    </View>

                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.03 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
                      Theme 7 - Places and Directions
                    </Text>
                  </View>
                ) : (
                  <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.035 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
                      i-Learn Smart Start Grade 3
                    </Text>
                    <Image
                      style={[
                        stylesMobile.imageRight,
                        {
                          width: orientation.isPortrait
                            ? 0.015 * width
                            : 0.012 * width,
                          height: orientation.isPortrait
                            ? 0.015 * width
                            : 0.012 * width,
                        },
                      ]}
                      source={imageRight}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.pop();
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: orientation.isPortrait
                            ? (0.035 * width) / 2
                            : (0.035 * width) / 2,
                        }}
                      >
                        Video Lesson
                      </Text>
                    </TouchableOpacity>

                    <Image
                      style={[
                        stylesMobile.imageRight,
                        {
                          width: orientation.isPortrait
                            ? 0.015 * width
                            : 0.012 * width,
                          height: orientation.isPortrait
                            ? 0.015 * width
                            : 0.012 * width,
                        },
                      ]}
                      source={imageRight}
                    />
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: orientation.isPortrait
                          ? (0.035 * width) / 2
                          : (0.035 * width) / 2,
                      }}
                    >
                      Theme 7 - Places and Directions
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View
              style={[
                stylesMobile.backgroundFake,
                {
                  height: orientation.isPortrait ? "25%" : "30%",
                },
              ]}
            ></View>
          </View>

          <View style={{ width: "100%", height: "100%", position: "relative" }}>
            <View
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: orientation.isPortrait
                  ? height * 0.04
                  : width * 0.04,
                paddingRight: orientation.isPortrait
                  ? -height * 0.05
                  : width * 0.04,
                marginRight: orientation.isPortrait ? -height * 0.5 : 0,
                paddingTop: orientation.isPortrait ? 10 : 0,
                paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
                // backgroundColor: "red"
              }}
            >
              {/* image hook of Mobile*/}
              <ImageBackground
                style={{
                  width:
                    orientation.isPortrait && isTablet
                      ? height * 0.85
                      : width * 0.78,
                  height:
                    orientation.isPortrait && isTablet
                      ? width * 0.02
                      : height * 0.06,
                  position: "absolute",
                  zIndex: 1,
                  left: orientation.isPortrait ? 0.07 * height : 0.082 * width,
                  top: orientation.isPortrait ? 0.0035 * width : -0.013 * width,
                }}
                source={hook}
                resizeMode={orientation.isPortrait ? "stretch" : "stretch"}
              ></ImageBackground>

              {/* image background paper of Mobile*/}

              <ImageBackground
                style={{
                  width: orientation.isPortrait ? height * 0.925 : "100%",
                  height: orientation.isPortrait ? width * 0.86 : "100%",
                }}
                source={imageBackgroundPaper2}
                resizeMode={orientation.isPortrait ? "stretch" : "stretch"}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifycontent: "center",
                    // backgroundColor: "red"
                  }}
                >
                  {/* Left content contain card item */}
                  <View
                    style={[
                      stylesMobile.leftColumn,
                      { height: orientation.isPortrait ? "80%" : "80%" },
                    ]}
                  >
                    <CardItemDetail item={itemLesson} index={indexLesson} />
                  </View>

                  {/* vertical line */}
                  <View
                    style={[
                      stylesMobile.centerColumn,
                      {
                        marginTop: orientation.isPortrait
                          ? 0.18 * height
                          : 0.1 * height,
                      },
                    ]}
                  />
                  {/* Right content contain video lesson */}
                  <View
                    style={[
                      stylesMobile.rightColumn,
                      {
                        width: orientation.isPortrait ? width : width,
                        height: orientation.isPortrait
                          ? height
                          : height - height * 0.2,
                        paddingLeft: orientation.isPortrait
                          ? 0.01 * width
                          : 0.05 * width,
                        paddingRight: orientation.isPortrait
                          ? 0.01 * width
                          : 0.07 * width,
                        paddingTop: orientation.isPortrait ? 0 : 0.094 * height,
                        paddingBottom: orientation.isPortrait
                          ? 0
                          : 0.02 * height,
                        flexDirection: "row",
                        // backgroundColor: "#000000"
                      },
                    ]}
                  >
                    {/* Scroll and display list CardLessonDetail by FlatList on Mobile*/}
                    <ScrollView
                      contentContainerStyle={{ paddingRight: 0 }}
                      showsVerticalScrollIndicator={false}
                      scrollEventThrottle={16}
                      onContentSizeChange={(_, height) => {
                        setCompleteScrollBarHeight(height);
                      }}
                      onLayout={({
                        nativeEvent: {
                          layout: { height },
                        },
                      }) => {
                        setVisibleScrollBarHeight(height);
                      }}
                      onScroll={Animated.event(
                        [
                          {
                            nativeEvent: {
                              contentOffset: { y: scrollIndicator },
                            },
                          },
                        ],
                        { useNativeDriver: false }
                      )}
                    >
                      {/* Display each card items */}
                      <FlatList
                        data={itemLesson.DataLesson}
                        numColumns={orientation1 == "LANDSCAPE" ? 3 : 2}
                        keyExtractor={(item) => item}
                        key={orientation1}
                        renderItem={({ item, index }) => (
                          <CardLessonDetail
                            item={item}
                            index={index}
                            navigation={navigation}
                          />
                        )}
                      />
                    </ScrollView>
                    <View style={stylesMobile.viewContentScroll}>
                      <Animated.View
                        style={[
                          stylesMobile.viewContentTotalScroll,
                          {
                            height: scrollIndicatorSize,
                            transform: [
                              { translateY: scrollIndicatorPosition },
                            ],
                          },
                        ]}
                      />
                    </View>
                  </View>
                </View>
                {/* image Ghim1 */}
                <Image
                  style={[
                    stylesMobile.imageGhim1,
                    {
                      left: orientation.isPortrait
                        ? -0.02 * width
                        : -0.025 * width,
                      bottom: orientation.isPortrait
                        ? 0.04 * height
                        : 0.04 * height,
                    },
                  ]}
                  source={imageGhim1}
                />
              </ImageBackground>
            </View>

            {/* </ScrollView> */}
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B792DD",
    height: height,
  },
});

export default DetailLearn;
