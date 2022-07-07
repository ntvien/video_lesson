import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import imageBackgroundCard from '../../image/backgroundCard.png'


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

            <View style={{ width: (Dimensions.get('window').width - 170) * 0.25, height: (Dimensions.get('window').height - 80) * 0.5, position: "relative", }}>
                <TouchableOpacity style={styles.container}
                    onPress={() => {
                        this.props.navigation.navigate('DetailLearn')
                    }}>
                    <ImageBackground
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
                    </ImageBackground >
                </TouchableOpacity>

            </View >




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
        padding: 5
    },
    container1: {
        width: 150,
        height: 140,
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "#036194",
        fontSize: 8,
        fontWeight: "bold",
    },
    imageLesson: {
        width: "100%",
        height: "75%",
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