import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, Dimensions, Image, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import image from '../../../image/eduhome.png'
import imageBackgroundPaper from '../../../image/backgroundpaper.png'
import imageGhim from '../../../image/ghim1.png'
import imageBack from '../../../image/back.png'
import imageRight from '../../../image/right.png'
import CardLession from '../../components/CardLesson';
import { dataLesson } from '../../../data/dataLesson';
import { FlatGrid } from 'react-native-super-grid';
import { useOrientation } from '../../hooks/useOrientation';
import ImmersiveMode from 'react-native-immersive-mode';
import { isTablet, isMoible } from '../../responsive/checkOrientation';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Learn = ({ navigation }) => {
    console.disableYellowBox = true;
    const orientation = useOrientation();
    // ImmersiveMode.fullLayout(true);

    console.log("WIDTH" + width);
    console.log("HEIGHT" + height);

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar backgroundColor='white' translucent={true} hidden={true} />

            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                <View style={{
                    position: "relative", width: "100%", height: orientation.isPortrait ? "15%" : 0.18 * height,
                    backgroundColor: "#00000033", zIndex: -1, flexDirection: "row", justifyContent: "center", alignItems: "center",
                }}>

                    <View style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: "center", flexDirection: "row" }}>
                        <View style={{
                            height: "100%",
                            top: 0,
                            left: width * 0.02,
                            justifyContent: "center",
                            position: "absolute",
                            zIndex: 1,
                        }} >
                            <Image style={styles.imageBack} source={imageBack} />
                        </View>

                        <View style={{ alignItems: "center", flexDirection: "row", marginTop: -0.3 * (0.2 * height) }}>
                            <Text style={{ color: "#ffffff" }}>
                                i-Learn Smart Start Grade 3
                            </Text>
                            <Image style={styles.imageRight} source={imageRight} />
                            <Text style={{ color: "#ffffff" }}>
                                Video Lesson
                            </Text>

                        </View>
                    </View>

                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>

                <View style={{ width: "100%", height: "100%", position: "relative" }}>

                    <Image style={[styles.imageGhim, {
                        left: orientation.isPortrait ? "5%" : width * 0.02,
                        top: orientation.isPortrait ? "-3%" : -width * 0.016,
                    }]} source={imageGhim} />
                    <View style={[styles.styleRectangle, {
                        width: orientation.isPortrait ? 150 : width * 0.43,
                        height: orientation.isPortrait ? 350 : height * 0.4,
                        left: orientation.isPortrait ? "7%" : width * 0.0265,
                        top: orientation.isPortrait ? "-3%" : -height * 0.03
                    }]} />

                    <View style={[styles.styleRectangle1, {
                        width: orientation.isPortrait ? 200 : width * 0.5,
                        height: orientation.isPortrait ? 350 : height * 0.6,
                        right: orientation.isPortrait ? "8%" : width * 0.02,
                        top: orientation.isPortrait ? "10%" : height * 0.1
                    }]} />

                    <View style={{
                        width: "100%", height: "100%",
                        paddingLeft: orientation.isPortrait ? 10 : width * 0.04,
                        paddingRight: orientation.isPortrait ? 10 : width * 0.04,
                        paddingTop: orientation.isPortrait ? 10 : 0,
                        paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
                    }}>
                        <ImageBackground style={{
                            width: orientation.isPortrait && isTablet ? width : "100%",
                            height: orientation.isPortrait && isTablet ? height : "100%",
                            // top: -height * 0.01,
                        }}
                            source={imageBackgroundPaper}
                            resizeMode={orientation.isPortrait ? "stretch" : "stretch"}>

                            <View style={{
                                width: width - 2 * (width * 0.06),
                                height: height - 2 * (height * 0.04),
                                paddingHorizontal: width * 0.06,
                                paddingTop: height * 0.04,
                                paddingBottom: height * 0.2,
                                // backgroundColor: "blue"
                            }}>
                                <FlatList
                                    // itemDimension={isTablet ? width * 0.2 : (isMoible ? width * 0.5 : 0)}
                                    data={dataLesson}
                                    numColumns={4}
                                    keyExtractor={item => item}
                                    // spacing={isTablet ? width * 0.02 : (isMoible ? width * 0.5 : 0)}
                                    renderItem={({ item, index }) => (
                                        <CardLession item={item} index={index} navigation={navigation} />
                                    )
                                    }
                                />
                            </View>

                        </ImageBackground>
                    </View>
                </View>


            </ImageBackground>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B792DD",
        flex: 1,
        height: Dimensions.get('window').height,
    },
    imageBackground: {
        flex: 1,
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
        marginHorizontal: "5%",
        resizeMode: "contain"
    },
    imageGhim: {
        width: width * 0.06,
        height: width * 0.06,
        resizeMode: "cover",
        position: "absolute",
        zIndex: 1
    },
    styleRectangle: {
        backgroundColor: "#35ABEB",
        borderWidth: width * 0.0075,
        borderColor: "#ffffff",
        borderRadius: width * 0.04,
        transform: [{ rotate: '-3deg' }],
        position: 'absolute',
    }, styleRectangle1: {
        backgroundColor: "#35ABEB",
        borderWidth: width * 0.01,
        borderColor: "#ffffff",
        borderRadius: width * 0.08,
        transform: [{ rotate: '3.5deg' }],
        position: 'absolute',
    },

});

export default Learn