import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, Dimensions, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import image from '../../../image/eduhome.png'
import imageBackgroundPaper from '../../../image/backgroundpaper.png'
import imageGhim from '../../../image/ghim1.png'
import imageBack from '../../../image/back.png'
import imageRight from '../../../image/right.png'
import CardLession from '../../components/CardLesson';
import { dataLesson } from '../../../data/dataLesson';
import { FlatGrid } from 'react-native-super-grid';


const Learn = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />

            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                <View style={{
                    position: "relative", width: "100%", height: "20%",
                    backgroundColor: "#00000033", zIndex: -1, flexDirection: "row", justifyContent: "center", alignItems: "center",
                }}>
                    <Image style={styles.imageBack} source={imageBack} />

                    <View style={{ alignItems: "center", marginTop: -20, flexDirection: "row", }}>
                        <Text style={{ color: "#ffffff" }}>
                            i-Learn Smart Start Grade 3
                        </Text>
                        <Image style={styles.imageRight} source={imageRight} />
                        <Text style={{ color: "#ffffff" }}>
                            Video Lesson
                        </Text>

                    </View>


                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>

                <View style={{ width: "100%", height: "100%", position: "relative" }}>
                    <Image style={styles.imageGhim} source={imageGhim} />
                    <View style={styles.styleRectangle} />
                    <View style={styles.styleRectangle1} />

                    <View style={{ width: "100%", height: "100%", paddingLeft: 35, paddingRight: 35, paddingBottom: 60, top: -10 }}>
                        <ImageBackground style={{ width: "100%", height: "100%" }}
                            source={imageBackgroundPaper}
                            resizeMode="contain">
                            <View style={{ width: "100%", height: "100%", paddingHorizontal: 50, paddingTop: 20, paddingBottom: 30 }}>
                                <FlatGrid
                                    itemDimension={120}
                                    data={dataLesson}
                                    style={styles.gridView}
                                    spacing={15}
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
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        height: Dimensions.get('window').height,
    },
    imageBackground: {
        flex: 1,
    },
    imageBack: {
        width: 30,
        height: 30,
        top: "13%",
        left: "2%",
        resizeMode: "cover",
        position: "absolute",
        zIndex: 1,
    },
    imageRight: {
        width: 10,
        height: 10,
        marginHorizontal: "5%",
        resizeMode: "contain"
    },
    imageGhim: {
        width: 35,
        height: 35,
        resizeMode: "cover",
        position: "absolute",
        left: "3%",
        top: "-3%",
        zIndex: 1
    },
    styleRectangle: {
        width: 250,
        height: 130,
        backgroundColor: "#35ABEB",
        borderWidth: 5,
        borderColor: "#ffffff",
        borderRadius: 20,
        transform: [{ rotate: '-3deg' }],
        position: 'absolute',
        left: 27,
        top: -10
    }, styleRectangle1: {
        width: 200,
        height: 180,
        backgroundColor: "#35ABEB",
        borderWidth: 5,
        borderColor: "#ffffff",
        borderRadius: 35,
        transform: [{ rotate: '5deg' }],
        position: 'absolute',
        right: 25,
        top: 30
    }
});

export default Learn