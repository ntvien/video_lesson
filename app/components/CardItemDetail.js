import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import imageBackgroundCard from '../../image/backgroundCard.png'
import imageRightLabel from '../../image/rightLabel.png'
import imageLeftLabel from '../../image/leftLabel.png'
import progressBar from '../../image/progressBar.png'

const width = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const height = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);

class CardItemDetail extends Component {
    // orientation = useOrientation();
    constructor(props) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
        this.state = ({
            screenInfo: Dimensions.get('screen'),
            isPortrait: Dimensions.get('screen').width < Dimensions.get('screen').height
        })
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount = () => {
        Dimensions.addEventListener('change', this.onChange);

    }
    componentWillUnmount = () => {
        Dimensions.removeEventListener('change', this.onChange);
    }
    onChange = (res) => {
        this.setState({
            screenInfo: res.screen,
            isPortrait: res.screen.height > res.screen.width
        })
    };


    selectCard = (index) => {
        debugger;
        this.setState({ cardActive: index });
    }
    render() {
        return (
            <View style={{
                width: this.state.isPortrait ? "70%" : "60%",
                height: this.state.isPortrait ? "20%" : "50%", justifyContent: "center", alignItems: "center"
            }}>

                <View style={{ width: "100%", height: "100%" }}>
                    <View style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
                        <ImageBackground
                            style={styles.container}
                            source={imageBackgroundCard}
                            resizeMode="cover">

                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row', flex: 0.3, top: "-2%" }}>
                                <Image style={{ width: 0.04 * width, height: 0.04 * width, resizeMode: "cover", left: -0.02 * width }} source={imageLeftLabel}></Image>
                                <Image style={{ width: 0.04 * width, height: 0.04 * width, resizeMode: "cover", right: -0.015 * width }} source={imageRightLabel}></Image>
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
                            <Image style={{ width: "100%", height: 0.025 * height, resizeMode: "cover" }} source={progressBar}></Image>
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