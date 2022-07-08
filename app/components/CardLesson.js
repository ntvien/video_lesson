import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import imageBackgroundCard from '../../image/backgroundCard.png'

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const widthCard = (width - 2 * (width * 0.07 + width * 0.04)) * 0.3;
const heightCard = (height - 2 * (height * 0.07)) * 0.6;

class CardLession extends Component {
    constructor(props) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard = (index) => {
        debugger;
        this.setState({ cardActive: index });
    }


    render() {
        const { item, index } = this.props;
        return (
            <ImageBackground
                style={styles.imageCard}
                source={imageBackgroundCard}
                resizeMode="stretch">
                <TouchableOpacity style={styles.container}
                    onPress={() => {
                        this.props.navigation.navigate('DetailLearn')
                    }}>
                    <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row' }}>
                        <View style={{
                            width: width * 0.009, height: width * 0.009, backgroundColor: "#35ABEB", borderRadius: width * 0.03,
                        }}>
                        </View>
                        <View style={{ width: width * 0.009, height: width * 0.009, backgroundColor: "#35ABEB", borderRadius: width * 0.03 }}></View>
                    </View>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,

                    }}>
                        <Text style={styles.text}>{item.name}</Text>

                        <View style={{}}>
                            <Image style={styles.imageLesson}
                                source={item.imageUrl} />
                        </View>

                    </View>

                    <View style={{
                        width: width * 0.03, height: width * 0.03, borderRadius: width * 0.0095, top: -0.025 * heightCard, left: 0.04 * widthCard,
                        backgroundColor: "#036194", position: "relative", justifyContent: "center", alignItems: "center"
                    }}>

                        <Image style={styles.imageCrown} source={require('../../image/crown.png')} />
                        <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "bold" }}>2</Text>
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
        padding: width * 0.01,
    },
    imageCard: {
        width: widthCard * 0.75,
        height: heightCard * 0.6,
        marginLeft: widthCard * 0.07,
        marginBottom: heightCard * 0.05
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "#036194",
        fontSize: 12,
        fontWeight: "bold",
        top: -0.03 * heightCard
    },
    imageLesson: {
        width: widthCard * 0.75,
        height: heightCard * 0.3,
        resizeMode: "contain",
        top: -0.02 * heightCard
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