import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Image, FlatList, useWindowDimensions } from 'react-native';
import { ImageBackground, Animated } from 'react-native';
import image from '../../../image/eduhome.png'
import imageBackgroundPaper1 from '../../../image/backgroundpaper1.png'
import imageGhim1 from '../../../image/ghim2.png'
import imageBack from '../../../image/back.png'
import imageRight from '../../../image/right.png'
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native';
import CardItemDetail from '../../components/CardItemDetail';
import CardLessonDetail from '../../components/CardLessonDetail';
import { dataLessonVideo } from '../../../data/dataVideoLesson';
import { useOrientation } from '../../hooks/useOrientation';
import { isTablet, isMoible } from '../../responsive/checkOrientation';
import { ScrollView } from 'react-native';

const width = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const height = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);

function DetailLearn({ navigation }) {
    const orientation = useOrientation();

    const [orientation1, setOrientation] = useState("")
    const window = useWindowDimensions()
    const getOrientation = () => {
        if (window.height < window.width) {
            setOrientation("LANDSCAPE")
        } else {
            setOrientation("PORTRAIT")
        }
        return orientation1
    }

    useEffect(() => {
        getOrientation()
    })

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
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                {/* <TouchableOpacity onPress={() => {
                    navigation.pop();
                }}>
                    <Image style={styles.imageBack} source={imageBack} />
                </TouchableOpacity> */}

                <View style={{
                    position: "relative", width: "100%", height: orientation.isPortrait ? 0.17 * height : 0.18 * height,
                    backgroundColor: "#00000033", zIndex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",
                }}>

                    <View style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: "center", flexDirection: "row" }}>
                        <View style={{
                            height: "100%",
                            top: orientation.isPortrait ? height * 0.015 : 0,
                            left: orientation.isPortrait ? height * 0.03 : width * 0.02,
                            justifyContent: "center",
                            position: "absolute",
                            zIndex: 1,
                        }} >
                            <TouchableOpacity onPress={() => {
                                navigation.pop();
                            }}>
                                <Image style={styles.imageBack} source={imageBack} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: "center", marginTop: orientation.isPortrait ? -0.15 * (0.2 * height) : -0.3 * (0.2 * height) }} >

                            {orientation.isPortrait ? <View style={{ alignItems: "center" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.03 * width / 2 : 0.035 * width / 2 }}>
                                        i-Learn Smart Start Grade 3
                                    </Text>
                                    <Image style={[styles.imageRight, {
                                        width: orientation.isPortrait ? 0.012 * width : 0.015 * width,
                                        height: orientation.isPortrait ? 0.012 * width : 0.015 * width,
                                        marginHorizontal: 0.02 * width,
                                    }]} source={imageRight} />
                                    <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.03 * width / 2 : 0.035 * width / 2 }}>
                                        Video Lesson
                                    </Text>
                                    <Image style={[styles.imageRight, {
                                        width: orientation.isPortrait ? 0.012 * width : 0.015 * width,
                                        height: orientation.isPortrait ? 0.012 * width : 0.015 * width,
                                        marginHorizontal: 0.02 * width,
                                    }]} source={imageRight} />
                                </View>

                                <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.03 * width / 2 : 0.035 * width / 2 }}>
                                    Theme 7 - Places and Directions
                                </Text>
                            </View> : <View style={{ alignItems: "center", flexDirection: "row" }}>
                                <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.035 * width / 2 : 0.035 * width / 2 }}>
                                    i-Learn Smart Start Grade 3
                                </Text>
                                <Image style={[styles.imageRight, {
                                    width: orientation.isPortrait ? 0.015 * width : 0.015 * width,
                                    height: orientation.isPortrait ? 0.015 * width : 0.015 * width,

                                }]} source={imageRight} />
                                <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.035 * width / 2 : 0.035 * width / 2 }}>
                                    Video Lesson
                                </Text>
                                <Image style={[styles.imageRight, {
                                    width: orientation.isPortrait ? 0.015 * width : 0.015 * width,
                                    height: orientation.isPortrait ? 0.015 * width : 0.015 * width,
                                }]} source={imageRight} />
                                <Text style={{ color: "#ffffff", fontSize: orientation.isPortrait ? 0.035 * width / 2 : 0.035 * width / 2 }}>
                                    Theme 7 - Places and Directions
                                </Text>
                            </View>}



                        </View>

                    </View>

                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>


                <View style={{ width: "100%", height: "100%", position: "relative" }}>

                    <View style={{
                        width: "100%", height: "100%",
                        paddingLeft: orientation.isPortrait ? height * 0.04 : width * 0.04,
                        paddingRight: orientation.isPortrait ? -height * 0.05 : width * 0.04,
                        marginRight: orientation.isPortrait ? -height * 0.5 : 0,
                        paddingTop: orientation.isPortrait ? 10 : 0,
                        paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
                        // backgroundColor: "red"
                    }}>
                        <ImageBackground style={{
                            width: orientation.isPortrait && isTablet ? height * 0.925 : "100%",
                            height: orientation.isPortrait && isTablet ? width * 0.86 : "100%",
                        }}
                            source={imageBackgroundPaper1}
                            resizeMode={orientation.isPortrait ? "stretch" : "stretch"}>
                            <View style={{
                                width: "100%", height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifycontent: "center",
                                // backgroundColor: "red"
                            }}>

                                <View style={styles.leftColumn}>
                                    <CardItemDetail />
                                </View>
                                <View style={[styles.centerColumn, {
                                    height: "82%",
                                    marginTop: orientation.isPortrait ? 0.18 * height : 0.1 * height,
                                }]} />
                                <View style={[styles.rightColumn, {
                                    width: orientation.isPortrait ? width : width,
                                    height: orientation.isPortrait ? height : height - height * 0.2,
                                    paddingLeft: orientation.isPortrait ? 0.03 * width : 0.05 * width,
                                    paddingRight: orientation.isPortrait ? 0.02 * width : 0.07 * width,
                                    paddingTop: orientation.isPortrait ? 0 : 0.094 * height,
                                    paddingBottom: orientation.isPortrait ? 0 : 0.02 * height,
                                    flexDirection: 'row',
                                    // backgroundColor: "#000000"
                                }]}>

                                    <ScrollView
                                        contentContainerStyle={{ paddingRight: 0 }}
                                        showsVerticalScrollIndicator={false}
                                        scrollEventThrottle={16}
                                        onContentSizeChange={(_, height) => {
                                            setCompleteScrollBarHeight(height);
                                        }}
                                        onLayout={({
                                            nativeEvent: {
                                                layout: { height }
                                            }
                                        }) => {
                                            setVisibleScrollBarHeight(height);
                                        }}
                                        onScroll={Animated.event(
                                            [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                                            { useNativeDriver: false }
                                        )}
                                    >
                                        {/* {dataLesson.map((item, index) => {
                                            return (
                                                <CardLession item={item} index={index} key={index} navigation={navigation} />)
                                        })} */}

                                        <FlatList
                                            data={dataLessonVideo}
                                            numColumns={orientation1 == "LANDSCAPE" ? 3 : 2}
                                            keyExtractor={item => item}
                                            key={orientation1}
                                            renderItem={({ item, index }) => (
                                                <CardLessonDetail item={item} index={index} />
                                            )
                                            }
                                        />
                                    </ScrollView>
                                    <View
                                        style={{
                                            height: '100%',
                                            width: 10,
                                            backgroundColor: '#9FBECC99',
                                            borderRadius: 8
                                        }}
                                    >
                                        <Animated.View
                                            style={{
                                                width: 10,
                                                borderRadius: 8,
                                                backgroundColor: '#036194',
                                                height: scrollIndicatorSize,
                                                transform: [{ translateY: scrollIndicatorPosition }]
                                            }}
                                        />
                                    </View>

                                    {/* <FlatList
                                        data={dataLessonVideo}
                                        numColumns={orientation1 == "LANDSCAPE" ? 3 : 2}
                                        keyExtractor={item => item}
                                        key={orientation1}
                                        renderItem={({ item, index }) => (
                                            <CardLessonDetail item={item} index={index} />
                                        )
                                        }
                                    /> */}

                                </View>
                            </View>

                            <Image style={[styles.imageGhim1, {
                                left: orientation.isPortrait ? -0.02 * width : -0.022 * width,
                                bottom: orientation.isPortrait ? 0.04 * height : 0.05 * height,
                            }]} source={imageGhim1} />
                        </ImageBackground>
                    </View>

                    {/* </ScrollView> */}
                </View>
            </ImageBackground>



        </SafeAreaView >)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B792DD",
        flex: 1,
        height: height,
    },
    imageBackground: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    imageBack: {
        width: 0.1 * width / 3,
        height: 0.1 * width / 3,
        resizeMode: "cover",
        marginTop: -0.3 * (0.2 * height)
    },
    imageRight: {
        width: 10,
        height: 10,
        marginHorizontal: 0.03 * width,
        resizeMode: "contain"
    },
    imageGhim1: {
        width: 0.07 * width,
        height: 0.07 * width,
        resizeMode: "cover",
        position: "absolute",
        zIndex: 1
    },
    leftColumn: {
        flex: 1,
        height: "80%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    }, centerColumn: {
        borderRightColor: "#036194",
        borderRightWidth: 2,
    },
    rightColumn: {
        flex: 2,
        width: width,
        height: height - height * 0.3,
        paddingLeft: 0.05 * width,
        paddingRight: 0.07 * width,
        paddingTop: 0.04 * height,
        // backgroundColor: "red"
    },
    gridView: {
        flex: 1,
    },
});

export default DetailLearn;