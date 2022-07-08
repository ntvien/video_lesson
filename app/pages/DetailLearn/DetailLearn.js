import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Image, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
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
const width = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const height = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);

function DetailLearn({ navigation }) {
    const orientation = useOrientation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                {/* <TouchableOpacity onPress={() => {
                    navigation.pop();
                }}>
                    <Image style={styles.imageBack} source={imageBack} />
                </TouchableOpacity> */}

                <View style={{
                    position: "relative", width: "100%", height: orientation.isPortrait ? "15%" : 0.18 * height,
                    backgroundColor: "#00000033", zIndex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",
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
                            <TouchableOpacity onPress={() => {
                                navigation.pop();
                            }}>
                                <Image style={styles.imageBack} source={imageBack} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: "center", flexDirection: "row", marginTop: -0.3 * (0.2 * height) }} >
                            <Text style={{ color: "#ffffff" }}>
                                i-Learn Smart Start Grade 3
                            </Text>
                            <Image style={styles.imageRight} source={imageRight} />
                            <Text style={{ color: "#ffffff" }}>
                                Video Lesson
                            </Text>
                            <Image style={styles.imageRight} source={imageRight} />
                            <Text style={{ color: "#ffffff" }}>
                                Theme 7 - Places and Direction
                            </Text>
                        </View>

                    </View>

                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>


                <View style={{ width: "100%", height: "100%", position: "relative" }}>

                    <View style={{
                        width: "100%", height: "100%",
                        paddingLeft: orientation.isPortrait ? 10 : width * 0.04,
                        paddingRight: orientation.isPortrait ? 10 : width * 0.04,
                        paddingTop: orientation.isPortrait ? 10 : 0,
                        paddingBottom: orientation.isPortrait ? 10 : height * 0.2,
                        // backgroundColor: "red"
                    }}>
                        <ImageBackground style={{
                            width: orientation.isPortrait && isTablet ? height : "100%",
                            height: orientation.isPortrait && isTablet ? width * 0.87 : "100%",

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
                                <View style={styles.centerColumn} />
                                <View style={styles.rightColumn}>
                                    <FlatList
                                        data={dataLessonVideo}
                                        numColumns={3}
                                        keyExtractor={item => item}
                                        renderItem={({ item, index }) => (
                                            <CardLessonDetail item={item} index={index} />
                                        )
                                        }
                                    />

                                </View>
                            </View>

                            <Image style={[styles.imageGhim1, {
                                left: orientation.isPortrait ? 0 : -0.02 * width,
                                bottom: orientation.isPortrait ? 0 : 0.06 * height,
                            }]} source={imageGhim1} />
                        </ImageBackground>
                    </View>

                    {/* </ScrollView> */}
                </View>
            </ImageBackground>



        </SafeAreaView>)
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
        marginHorizontal: "5%",
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
        alignItems: "center",
        borderRightColor: "#036194",
        borderRightWidth: 2,
        // backgroundColor: "red"
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