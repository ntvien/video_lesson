import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, Dimensions, Image, TouchableHighlight } from 'react-native';
import { ImageBackground } from 'react-native';
import image from '../../../image/eduhome.png'
import imageBackgroundPaper1 from '../../../image/backgroundpaper1.png'
import imageGhim1 from '../../../image/ghim2.png'
import imageBack from '../../../image/back.png'
import imageRight from '../../../image/right.png'
import CardLession from '../../components/CardLesson';
import { ScrollView } from 'react-native';
import { dataLesson } from '../../../data/dataLesson';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native';


function DetailLearn({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                <View style={{
                    position: "relative", width: "100%", height: "20%",
                    backgroundColor: "#00000033", zIndex: -1, flexDirection: "row"
                }}>

                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image style={styles.imageBack} source={imageBack} />
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: -20, flexDirection: "row", marginLeft: 90 }}>
                        <Text style={{ color: "#ffffff" }}>
                            i-Learn Smart Start Grade 3
                        </Text>
                        <Image style={styles.imageRight} source={imageRight} />
                        <Text style={{ color: "#ffffff" }}>
                            Video Lesson
                        </Text>
                        <Image style={styles.imageRight} source={imageRight} />
                        <Text style={{ color: "#ffffff" }}>
                            Theme 7 -Places and Direction
                        </Text>

                    </View>


                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>


                <View style={{ width: "100%", height: "100%", position: "relative" }}>

                    {/* <View style={styles.styleRectangle} />
                    <View style={styles.styleRectangle1} /> */}


                    <View style={{ width: "100%", height: "100%", paddingLeft: 35, paddingRight: 35, paddingBottom: 60, top: -10 }}>
                        <ImageBackground style={{ width: "100%", height: "100%" }}
                            source={imageBackgroundPaper1}
                            resizeMode="contain">

                            <View style={{
                                width: "100%", height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifycontent: "center",
                            }}>

                                <View style={styles.leftColumn}>

                                </View>
                                <View style={styles.centerColumn} />
                                <View style={styles.rightColumn}>
                                    <View style={{ width: "100%", height: "100%", }}>
                                        <FlatGrid
                                            itemDimension={90}
                                            data={dataLesson}
                                            style={styles.gridView}
                                            spacing={10}
                                            renderItem={({ item, index }) => (
                                                <CardLession item={item} index={index} navigation={navigation} />
                                            )
                                            }
                                        />
                                    </View>
                                </View>
                            </View>



                            <Image style={styles.imageGhim1} source={imageGhim1} />
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
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        height: Dimensions.get('window').height,
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
        marginTop: 100,
    },
    imageBack: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 10,
        resizeMode: "cover"
    },
    imageRight: {
        width: 10,
        height: 10,
        marginHorizontal: 15,
        resizeMode: "contain"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    imageGhim1: {
        width: 35,
        height: 35,
        resizeMode: "cover",
        position: "absolute",
        left: -11,
        bottom: 25,
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
    },
    styleRectangle1: {
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
    },
    leftColumn: {
        flex: 1.5,
        // backgroundColor: "#E5E8EA",
        height: "100%",
        width: "100%",
        borderRadius: 20,
        position: "relative",
    },
    centerColumn: {
        flex: 0.011,
        height: "80%",
        backgroundColor: "#036194",
        marginTop: 30,
    },
    rightColumn: {
        flex: 3,
        // backgroundColor: "#E5E8EA",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        padding: 30
    }
});

export default DetailLearn;