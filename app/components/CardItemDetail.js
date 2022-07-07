import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import imageBackgroundCard from '../../image/backgroundCard.png'
import imageRightLabel from '../../image/rightLabel.png'
import imageLeftLabel from '../../image/leftLabel.png'
import progressBar from '../../image/progressBar.png'

class CardItemDetail extends Component {

    render() {
        return (
            <View style={{ width: "53%", height: "60%" }}>

                <View style={{ width: 140, height: 155 }}>
                    <View style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
                        <ImageBackground
                            style={styles.container}
                            source={imageBackgroundCard}
                            resizeMode="cover">

                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row', flex: 0.3, top: "-2%" }}>
                                <Image style={{ width: 30, height: 30, resizeMode: "cover", left: "-90%" }} source={imageLeftLabel}></Image>
                                <Image style={{ width: 30, height: 30, resizeMode: "cover", right: "-50%" }} source={imageRightLabel}></Image>
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center", flex: 3, paddingRight: "8%", paddingLeft: "5%",
                            }}>
                                <Text style={styles.text}>Cities around the World</Text>

                                <View style={{ width: "100%", height: "100%", flex: 1, borderRadius: 20 }}>
                                    <Image style={styles.imageLesson}
                                        source={require('../../image/image6.png')} />
                                </View>
                            </View>

                            <View style={{
                                width: "17%", height: "15%", borderRadius: 5, top: "-12%", left: "10%",
                                backgroundColor: "#036194", position: "relative", justifyContent: "center", alignItems: "center"
                            }}>

                                <Image style={styles.imageCrown} source={require('../../image/crown.png')} />
                                <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "bold" }}>2</Text>
                            </View>
                        </ImageBackground>
                    </View >

                    <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Text style={{ fontSize: 10, color: "#036194", fontWeight: "700" }}>100%</Text>
                        <View style={{ width: "100%" }}>
                            <Image style={{ width: "100%", height: 15, resizeMode: "cover" }} source={progressBar}></Image>
                        </View>
                    </View>
                </View>




            </View>





        )
    };

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "#036194",
        fontSize: 9,
        fontWeight: "bold",
    },
    imageLesson: {
        width: "100%",
        height: "75%",
        resizeMode: "contain",
        flex: 0.8
    },
    imageCrown: {
        top: "-25%",
        width: 15,
        height: 10,
        resizeMode: "cover",
        position: "absolute"
    }
});

export default CardItemDetail;