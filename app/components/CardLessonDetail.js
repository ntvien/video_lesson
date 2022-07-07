import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import imageVideo from '../../image/imageVideo.png'
import imagePersonal from '../../image/personal.png'
import imageTimeVideo from '../../image/timeVideo.png'
import imageShare from '../../image/share.png'
import imageProgressVideo from '../../image/progressVideo.png'

class CardLessonDetail extends Component {

    render() {
        const { item, index } = this.props;
        return (

            <View style={{ width: 120, height: 100, position: "relative", }}>
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
                                <Image style={{ width: "100%", height: 10, resizeMode: "cover" }} source={imageProgressVideo}></Image>
                            </View>
                        </View>

                    </View>


                </View>

                {/* <ImageBackground
                    style={styles.container}
                    source={imageBackgroundCard}
                    resizeMode="stretch"
                >
                    <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row', paddingRight: 15 }}>
                        <View style={{
                            width: 10, height: 10, backgroundColor: "#35ABEB", borderRadius: 10,
                        }}>
                        </View>
                        <View style={{ width: 10, height: 10, backgroundColor: "#35ABEB", borderRadius: 10 }}></View>
                    </View>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center", flex: 1, paddingRight: 20, paddingLeft: 5
                    }}>
                        <Text style={styles.text}>{item.name}</Text>

                        <View style={{ width: "100%", height: "100%", flex: 1, backgroundColor: "white", overflow: "hidden", borderRadius: 20 }}>
                            <Image style={styles.imageLesson}
                                source={item.imageUrl} />
                        </View>
                    </View>

                    <View style={{
                        width: 20, height: 20, borderRadius: 5, top: -20, left: 8,
                        backgroundColor: "#036194", position: "relative", justifyContent: "center", alignItems: "center"
                    }}>

                        <Image style={styles.imageCrown} source={require('../../image/crown.png')} />
                        <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "bold" }}>2</Text>
                    </View>
                </ImageBackground > */}

            </View >
        )
    };

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#E8E9EA",
        padding: 2,
        borderRadius: 11
    },
    container1: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: "5%",
        justifyContent: "space-between",
        alignItems: "center"
    },
});

export default CardLessonDetail;