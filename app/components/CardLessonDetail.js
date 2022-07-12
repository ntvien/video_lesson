import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import imageVideo from '../../image/imageVideo.png'
import imagePersonal from '../../image/personal.png'
import imageTimeVideo from '../../image/timeVideo.png'
import imageShare from '../../image/share.png'
import imageProgressVideo from '../../image/progressVideo.png'
import { isTablet } from '../../app/responsive/checkOrientation';

const width = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const height = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);
const widthCard = ((width - 2 * (width * 0.04))) - (width * 0.5);
const heightCard = (height - 2 * (height * 0.04));


class CardLessonDetail extends Component {

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
    };


    render() {
        const { item, index } = this.props;
        return isTablet() ?
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate("VideoLesson", { item });
            }} >
                <View style={[styles.container, {
                    width: this.state.isPortrait ? "45%" : "30%",
                    height: this.state.isPortrait ? widthCard * 0.4 : 0.26 * heightCard,
                    marginRight: this.state.isPortrait ? 0.04 * widthCard : 0.06 * widthCard,
                }]}>
                    <View style={[styles.container1, {
                        width: this.state.isPortrait ? "100%" : "100%",
                        height: this.state.isPortrait ? widthCard * 0.38 : 0.249 * heightCard,
                        padding: this.state.isPortrait ? 0.007 * width : 0.0075 * widthCard,
                    }]}>
                        <View style={{
                            width: this.state.isPortrait ? "100%" : "100%",
                            height: this.state.isPortrait ? "100%" : "100%",
                            flex: 1, justifyContent: "center", alignItems: "center",
                            paddingHorizontal: this.state.isPortrait ? 0.002 * widthCard : 0.01 * widthCard,
                            paddingVertical: this.state.isPortrait ? 0.002 * widthCard : 0.01 * widthCard,
                        }}>
                            <Image style={{ resizeMode: "stretch", width: "100%", height: "100%" }}
                                source={imageVideo} ></Image>
                        </View>

                        <View style={{
                            width: "100%", height: "auto", justifyContent: "center",
                            alignItems: "center"
                        }} >

                            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>

                                <View style={{ flex: 1, paddingLeft: "5%" }}>
                                    <Text style={{ fontSize: this.state.isPortrait ? 0.027 * widthCard : 0.025 * widthCard, color: "#00557A", fontWeight: "700" }}>{item.Name}</Text>

                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Image style={{
                                            width: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard,
                                            height: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard, resizeMode: "contain", marginRight: "3%"
                                        }} source={imagePersonal}></Image>
                                        <Text style={{ fontSize: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard }}>{item.TeacherName}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Image style={{
                                            width: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard,
                                            height: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard, resizeMode: "contain", marginRight: "3%"
                                        }} source={imageTimeVideo}></Image>
                                        <Text style={{ fontSize: this.state.isPortrait ? 0.018 * widthCard : 0.015 * widthCard }}>{item.Duration}</Text>
                                    </View>
                                </View>

                                <View>
                                    <Image style={{
                                        width: this.state.isPortrait ? 0.06 * widthCard : 0.06 * widthCard,
                                        height: this.state.isPortrait ? 0.06 * widthCard : 0.06 * widthCard,
                                        resizeMode: "contain",
                                        marginRight: "2%"
                                    }} source={imageShare}></Image>
                                </View>
                            </View>

                            <View style={{ width: "100%", paddingBottom: this.state.isPortrait ? 0 : 0.01 * widthCard }}>
                                <Image style={{
                                    width: "100%",
                                    height: this.state.isPortrait ? 0.02 * height : 0.023 * heightCard,
                                    resizeMode: "cover"
                                }} source={imageProgressVideo}></Image>
                            </View>
                        </View>

                    </View>


                </View>
            </TouchableOpacity> :
            <View style={[styles.container, {
                width: this.state.isPortrait ? "45%" : "30%",
                height: this.state.isPortrait ? widthCard * 0.3 : 0.26 * heightCard,
                marginRight: this.state.isPortrait ? 0.04 * widthCard : 0.06 * widthCard,
            }]}>
                <View style={[styles.container1, {
                    width: this.state.isPortrait ? "100%" : "100%",
                    height: this.state.isPortrait ? widthCard * 0.28 : 0.249 * heightCard,
                    padding: this.state.isPortrait ? 0.007 * width : 0.0075 * widthCard,
                }]}>
                    <View style={{
                        width: this.state.isPortrait ? "100%" : "100%",
                        height: this.state.isPortrait ? "100%" : "100%",
                        flex: 1, justifyContent: "center", alignItems: "center",
                        paddingHorizontal: this.state.isPortrait ? 0.002 * widthCard : 0.01 * widthCard,
                        paddingVertical: this.state.isPortrait ? 0.002 * widthCard : 0.01 * widthCard,
                    }}>
                        <Image style={{ resizeMode: "stretch", width: "100%", height: "100%" }}
                            source={imageVideo} ></Image>
                    </View>

                    <View style={{
                        width: "100%", height: "auto", justifyContent: "center",
                        alignItems: "center"
                    }} >

                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>

                            <View style={{ flex: 1, paddingLeft: "5%" }}>
                                <Text style={{ fontSize: this.state.isPortrait ? 0.028 * widthCard : 0.028 * widthCard, color: "#00557A", fontWeight: "700" }}>{item.Name}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{
                                        width: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard,
                                        height: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard, resizeMode: "contain", marginRight: "3%"
                                    }} source={imagePersonal}></Image>
                                    <Text style={{ fontSize: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard }}>{item.TeacherName}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{
                                        width: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard,
                                        height: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard, resizeMode: "contain", marginRight: "3%"
                                    }} source={imageTimeVideo}></Image>
                                    <Text style={{
                                        fontSize: this.state.isPortrait ? 0.018 * widthCard : 0.017 * widthCard
                                    }}>{item.Duration}</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={{
                                    width: this.state.isPortrait ? 0.06 * widthCard : 0.06 * widthCard,
                                    height: this.state.isPortrait ? 0.06 * widthCard : 0.06 * widthCard,
                                    resizeMode: "contain",
                                    marginRight: "2%"
                                }} source={imageShare}></Image>
                            </View>
                        </View>

                        <View style={{ width: "100%", paddingBottom: this.state.isPortrait ? 0 : 0.01 * widthCard }}>
                            <Image style={{
                                width: "100%",
                                height: this.state.isPortrait ? 0.02 * height : 0.027 * heightCard,
                                resizeMode: "cover"
                            }} source={imageProgressVideo}></Image>
                        </View>
                    </View>

                </View>


            </View>
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
        marginRight: 0.04 * width,
        marginBottom: 0.03 * height
    },
    container1: {
        width: "100%",
        height: 0.2 * height,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 0.007 * width,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0.03 * height,
        marginRight: 0.03 * width,
    },
});

export default CardLessonDetail;