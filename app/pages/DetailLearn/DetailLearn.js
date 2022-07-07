import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Image } from 'react-native';
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


function DetailLearn({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                <TouchableOpacity onPress={() => {
                    navigation.pop();
                }}>
                    <Image style={styles.imageBack} source={imageBack} />
                </TouchableOpacity>

                <View style={{
                    position: "relative", width: "100%", height: "20%",
                    backgroundColor: "#00000033", zIndex: -1, flexDirection: "row", justifyContent: "center", alignItems: "center",
                }}>

                    <View style={{ alignItems: "center", marginTop: -20, flexDirection: "row" }} >
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

                    <View style={{ position: "absolute", borderTopLeftRadius: 35, borderTopRightRadius: 35, bottom: 0, width: "100%", backgroundColor: "#B792DD", height: "30%", zIndex: 1 }}></View>
                </View>


                <View style={{ width: "100%", height: "100%", position: "relative" }}>

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
                                    <CardItemDetail />
                                </View>
                                <View style={styles.centerColumn} />
                                <View style={styles.rightColumn}>
                                    <View style={{ width: "100%", height: "100%", }}>
                                        <FlatGrid
                                            itemDimension={110}
                                            data={dataLessonVideo}
                                            style={styles.gridView}
                                            spacing={10}
                                            renderItem={({ item, index }) => (
                                                <CardLessonDetail item={item} index={index} />
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
        top: 10,
        left: 10,
        resizeMode: "cover",
        position: "absolute",
        zIndex: 1,
    },
    imageRight: {
        width: 10,
        height: 10,
        marginHorizontal: "3%",
        resizeMode: "contain"
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
    leftColumn: {
        flex: 1.5,
        height: "100%",
        width: "100%",
        borderRadius: 20,
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    centerColumn: {
        flex: 0.011,
        height: "70%",
        backgroundColor: "#036194",
        marginTop: "6%",
    },
    rightColumn: {
        flex: 3,
        width: "100%",
        height: "100%",
        borderRadius: 20,
        paddingHorizontal: "2%",
        paddingVertical: "5%"
    },
    gridView: {
        flex: 1,
    },
});

export default DetailLearn;