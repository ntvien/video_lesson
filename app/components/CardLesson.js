import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions,  } from 'react-native';
import imageBackgroundCard from '../../image/backgroundCard.png'

const width = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const height = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);
const widthCard = (width - 2 * (width * 0.07 + width * 0.04)) * 0.3;
const heightCard = (height - 2 * (height * 0.07)) * 0.6;

class CardLession extends Component {
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
        const { item, index } = this.props;
        return (
            <ImageBackground
                style={[styles.imageCard, {
                    width: this.state.isPortrait ? heightCard * 0.6 : widthCard * 0.75,
                    height: this.state.isPortrait ? widthCard * 0.9 : heightCard * 0.6,
                    marginLeft: this.state.isPortrait ? heightCard * 0.07 : widthCard * 0.07,
                    marginBottom: this.state.isPortrait ? widthCard * 0.05 : heightCard * 0.05
                }]}
                source={imageBackgroundCard}
                resizeMode="stretch">
                <TouchableOpacity style={[styles.container, { padding: this.state.isPortrait ? width * 0.005 : width * 0.01, }]}
                    onPress={() => {
                        this.props.navigation.navigate('DetailLearn')
                    }}>
                    <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row' }}>
                        <View style={{
                            width: this.state.isPortrait ? width * 0.009 : width * 0.009,
                            height: this.state.isPortrait ? width * 0.009 : width * 0.009,
                            backgroundColor: "#35ABEB",
                            borderRadius: width * 0.03,
                        }}>
                        </View>
                        <View style={{
                            width: width * 0.009, height: width * 0.009,
                            backgroundColor: "#35ABEB", borderRadius: width * 0.03,
                            right: this.state.isPortrait ? -width * 0.02 : 0
                        }}></View>
                    </View>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}>
                        <Text style={[styles.text, { fontSize: 0.025 * width / 2, top: this.state.isPortrait ? -0.06 * widthCard : -0.03 * heightCard }]}>{item.name}</Text>

                        <View style={{}}>
                            <Image style={[styles.imageLesson, {
                                width: this.state.isPortrait ? heightCard * 0.55 : widthCard * 0.75,
                                height: this.state.isPortrait ? widthCard * 0.45 : heightCard * 0.3,
                                top: this.state.isPortrait ? -0.02 * widthCard : -0.02 * heightCard,
                                left: this.state.isPortrait ? 0.05 * widthCard : 0,
                                paddingHorizontal: this.state.isPortrait ? 0.05 * widthCard : 0,
                            }]}
                                source={item.imageUrl} />
                        </View>

                    </View>

                    <View style={{
                        width: width * 0.03, height: width * 0.03, borderRadius: width * 0.0095,
                        top: this.state.isPortrait ? -0.03 * widthCard : -0.025 * heightCard,
                        left: this.state.isPortrait ? 0.04 * heightCard : 0.04 * widthCard,
                        backgroundColor: "#036194", position: "relative", justifyContent: "center", alignItems: "center"
                    }}>

                        <Image style={styles.imageCrown} source={require('../../image/crown.png')} />
                        <Text style={{ color: "#ffffff", fontSize: 0.03 * width / 2, fontWeight: "bold" }}>2</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground >

        )
    };

}

const styles = StyleSheet.create({
    container: {
        width: widthCard * 0.7,
        height: heightCard * 0.6,

    },
    imageCard: {
        width: widthCard * 0.75,
        height: heightCard * 0.6,

    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "#036194",

        fontWeight: "bold",

    },
    imageLesson: {
        width: widthCard * 0.75,
        height: heightCard * 0.3,
        resizeMode: "contain",

    },
    imageCrown: {
        top: -5,
        width: 15,
        height: 10,
        resizeMode: "cover",
        position: "absolute"
    }
});

export default CardLession