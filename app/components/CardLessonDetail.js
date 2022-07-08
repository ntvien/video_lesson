import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import imageVideo from '../../image/imageVideo.png'
import imagePersonal from '../../image/personal.png'
import imageTimeVideo from '../../image/timeVideo.png'
import imageShare from '../../image/share.png'
import imageProgressVideo from '../../image/progressVideo.png'

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const widthCard = ((width - 2 * (width * 0.04))) - (width * 0.5);
const heightCard = (height - 2 * (height * 0.04));


class CardLessonDetail extends Component {

    render() {
        const { item, index } = this.props;
        return (

            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={{ width: "100%", height: "100%", flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ resizeMode: "stretch", width: "100%", height: "100%" }} source={imageVideo} ></Image>
                    </View>

                    <View style={{ width: "100%", height: "auto", justifyContent: "center", alignItems: "center" }} >

                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>

                            <View style={{ flex: 1, paddingLeft: "5%" }}>
                                <Text style={{ fontSize: 10, color: "#00557A", fontWeight: "700" }}>{item.lecture}</Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ width: 10, height: 10, resizeMode: "contain", marginRight: "3%" }} source={imagePersonal}></Image>
                                    <Text style={{ fontSize: 8 }}>{item.teacherName}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ width: 10, height: 10, resizeMode: "contain", marginRight: "3%" }} source={imageTimeVideo}></Image>
                                    <Text style={{ fontSize: 8 }}>{item.timeVideo}</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={{ width: 20, height: 20, resizeMode: "contain", marginRight: "2%" }} source={imageShare}></Image>
                            </View>
                        </View>

                        <View style={{ width: "100%" }}>
                            <Image style={{ width: "100%", height: 0.022 * height, resizeMode: "cover" }} source={imageProgressVideo}></Image>
                        </View>
                    </View>

                </View>


            </View>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        width: "30%",
        height: 0.21 * height,
        backgroundColor: "#E8E9EA",
        padding: 0.004 * width,
        borderRadius: 11,
        // backgroundColor: 'yellow'
        marginRight: 0.03 * width,
        marginBottom: 0.03 * height
    },
    container1: {
        width: "100%",
        height: 0.2 * height,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 0.006 * width,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0.03 * height,
        marginRight: 0.03 * width,
    },
});

export default CardLessonDetail;