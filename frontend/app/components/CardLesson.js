import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import imageBackgroundCard from "../../image/backgroundCard.png";
import { isTablet } from "../../app/responsive/checkOrientation";
import { dataTheme } from "../../data/dataTheme";

const width = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const height = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const widthCard = (width - 2 * (width * 0.07 + width * 0.04)) * 0.3;
const heightCard = (height - 2 * (height * 0.07)) * 0.6;

class CardLession extends Component {
  constructor(props) {
    super(props);
    this.selectCard = this.selectCard.bind(this);
    this.state = {
      screenInfo: Dimensions.get("screen"),
      isPortrait:
        Dimensions.get("screen").width < Dimensions.get("screen").height,
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount = () => {
    Dimensions.addEventListener("change", this.onChange);
  };
  componentWillUnmount = () => {
    Dimensions.removeEventListener("change", this.onChange);
  };
  onChange = (res) => {
    this.setState({
      screenInfo: res.screen,
      isPortrait: res.screen.height > res.screen.width,
    });
  };

  selectCard = (index) => {
    debugger;
    this.setState({ cardActive: index });
  };

  render() {
    const { item, index } = this.props;
    return isTablet() ? (
      <ImageBackground
        style={[
          styles.imageCard,
          {
            width: this.state.isPortrait ? heightCard * 0.6 : widthCard * 0.75,
            height: this.state.isPortrait ? widthCard * 0.9 : heightCard * 0.6,
            marginLeft: this.state.isPortrait
              ? heightCard * 0.07
              : widthCard * 0.07,
            marginBottom: this.state.isPortrait
              ? widthCard * 0.05
              : heightCard * 0.05,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        source={imageBackgroundCard}
        resizeMode="stretch"
      >
        <TouchableOpacity
          style={[
            styles.container,
            {
              // padding: this.state.isPortrait ? width * 0.005 : width * 0.01,
            },
          ]}
          onPress={() => {
            this.props.navigation.navigate("DetailLearn", { item, index });
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: this.state.isPortrait ? 0 : 0.03 * widthCard,
            }}
          >
            <View
              style={{
                width: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                height: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                backgroundColor: "#35ABEB",
                borderRadius: width * 0.03,
                left: this.state.isPortrait ? 0 : 0.01 * widthCard,
              }}
            ></View>
            <View
              style={{
                width: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                height: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                backgroundColor: "#35ABEB",
                borderRadius: width * 0.03,
                right: this.state.isPortrait
                  ? 0.022 * widthCard
                  : 0.035 * widthCard,
              }}
            ></View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              // backgroundColor: "red",
              right: this.state.isPortrait
                ? 0.015 * widthCard
                : 0.013 * widthCard,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: this.state.isPortrait
                    ? (0.03 * width) / 2
                    : (0.03 * width) / 2,
                  top: this.state.isPortrait
                    ? -0.06 * widthCard
                    : -0.05 * heightCard,
                },
              ]}
            >
              {item.Title}
            </Text>

            <View style={{}}>
              <Image
                style={[
                  styles.imageLesson,
                  {
                    width: this.state.isPortrait
                      ? heightCard * 0.55
                      : widthCard * 0.75,
                    height: this.state.isPortrait
                      ? widthCard * 0.45
                      : heightCard * 0.3,
                    top: this.state.isPortrait
                      ? -0.04 * widthCard
                      : -0.035 * heightCard,
                    // left: this.state.isPortrait ? 0.05 * widthCard : 0,
                    paddingHorizontal: this.state.isPortrait
                      ? 0.05 * widthCard
                      : 0,
                  },
                ]}
                source={item.ImageBackground}
              />

              <Image
                style={[
                  styles.imageLesson,
                  {
                    width: this.state.isPortrait
                      ? heightCard * 0.55
                      : widthCard * 0.75,
                    height: this.state.isPortrait
                      ? widthCard * 0.45
                      : heightCard * 0.3,
                    top: this.state.isPortrait
                      ? -0.04 * widthCard
                      : -0.035 * heightCard,
                    // left: this.state.isPortrait ? 0.05 * widthCard : 0,
                    paddingHorizontal: this.state.isPortrait
                      ? 0.05 * widthCard
                      : 0,
                    position: "absolute",
                  },
                ]}
                source={item.Image}
              />
            </View>
          </View>

          {index == 0 ? (
            <View
              style={{
                width: this.state.isPortrait
                  ? heightCard * 0.095
                  : widthCard * 0.125,
                height: this.state.isPortrait
                  ? heightCard * 0.1
                  : widthCard * 0.13,
                borderRadius: this.state.isPortrait
                  ? width * 0.009
                  : width * 0.0092,
                top: this.state.isPortrait
                  ? -0.06 * widthCard
                  : -0.06 * heightCard,
                left: this.state.isPortrait
                  ? 0.01 * heightCard
                  : 0.04 * widthCard,
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          ) : (
            <View
              style={{
                width: this.state.isPortrait
                  ? heightCard * 0.095
                  : widthCard * 0.125,
                height: this.state.isPortrait
                  ? heightCard * 0.1
                  : widthCard * 0.13,
                borderRadius: this.state.isPortrait
                  ? width * 0.009
                  : width * 0.0092,
                top: this.state.isPortrait
                  ? -0.06 * widthCard
                  : -0.06 * heightCard,
                left: this.state.isPortrait
                  ? 0.01 * heightCard
                  : 0.04 * widthCard,
                backgroundColor: "#036194",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={[
                  styles.imageCrown,
                  {
                    top: this.state.isPortrait
                      ? -0.02 * widthCard
                      : -0.02 * widthCard,
                    width: this.state.isPortrait
                      ? 0.065 * widthCard
                      : 0.075 * widthCard,
                    height: this.state.isPortrait
                      ? 0.032 * widthCard
                      : 0.045 * widthCard,
                  },
                ]}
                source={require("../../image/crown.png")}
              />
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: (0.035 * width) / 2,
                  fontWeight: "bold",
                }}
              >
                {index}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </ImageBackground>
    ) : (
      <ImageBackground
        style={[
          styles.imageCard,
          {
            width: this.state.isPortrait ? heightCard * 0.65 : widthCard * 0.75,
            height: this.state.isPortrait ? widthCard * 0.7 : heightCard * 0.75,
            marginLeft: this.state.isPortrait
              ? heightCard * 0.03
              : widthCard * 0.07,
            marginBottom: this.state.isPortrait
              ? widthCard * 0.05
              : heightCard * 0.05,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        source={imageBackgroundCard}
        resizeMode="stretch"
      >
        <TouchableOpacity
          style={[
            styles.container,
            {
              // padding: this.state.isPortrait ? width * 0.005 : width * 0.01,
            },
          ]}
          onPress={() => {
            this.props.navigation.navigate("DetailLearn", { item , index});
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: this.state.isPortrait ? 0 : -0.03 * widthCard,
            }}
          >
            <View
              style={{
                width: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                height: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                backgroundColor: "#35ABEB",
                borderRadius: width * 0.03,
                left: this.state.isPortrait
                  ? 0.05 * widthCard
                  : 0.01 * widthCard,
              }}
            ></View>
            <View
              style={{
                width: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                height: this.state.isPortrait
                  ? widthCard * 0.04
                  : widthCard * 0.04,
                backgroundColor: "#35ABEB",
                borderRadius: width * 0.03,
                right: this.state.isPortrait
                  ? 0.07 * widthCard
                  : 0.035 * widthCard,
              }}
            ></View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              // backgroundColor: "red",
              right: this.state.isPortrait
                ? 0.015 * widthCard
                : 0.013 * widthCard,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: this.state.isPortrait
                    ? (0.025 * width) / 2
                    : (0.03 * width) / 2,
                  top: this.state.isPortrait
                    ? -0.001 * widthCard
                    : -0.02 * heightCard,
                },
              ]}
            >
              {item.Title}
            </Text>

            <View style={{}}>
              <Image
                style={[
                  styles.imageLesson,
                  {
                    width: this.state.isPortrait
                      ? heightCard * 0.55
                      : widthCard * 0.75,
                    height: this.state.isPortrait
                      ? widthCard * 0.45
                      : heightCard * 0.38,
                    top: this.state.isPortrait
                      ? -0.03 * widthCard
                      : -0.01 * heightCard,
                    // left: this.state.isPortrait ? 0.05 * widthCard : 0,
                    paddingHorizontal: this.state.isPortrait
                      ? 0.05 * widthCard
                      : 0,
                  },
                ]}
                source={item.ImageBackground}
              />
              <Image
                style={[
                  styles.imageLesson,
                  {
                    width: this.state.isPortrait
                      ? heightCard * 0.55
                      : widthCard * 0.75,
                    height: this.state.isPortrait
                      ? widthCard * 0.45
                      : heightCard * 0.38,
                    top: this.state.isPortrait
                      ? -0.03 * widthCard
                      : -0.01 * heightCard,
                    // left: this.state.isPortrait ? 0.05 * widthCard : 0,
                    paddingHorizontal: this.state.isPortrait
                      ? 0.05 * widthCard
                      : 0,
                    position: "absolute",
                  },
                ]}
                source={item.Image}
              />
            </View>
          </View>

          {index == 0 ? (
            <View
              style={{
                width: this.state.isPortrait
                  ? heightCard * 0.095
                  : widthCard * 0.1,
                height: this.state.isPortrait
                  ? heightCard * 0.1
                  : widthCard * 0.1,
                borderRadius: this.state.isPortrait
                  ? width * 0.007
                  : width * 0.005,
                top: this.state.isPortrait
                  ? -0.03 * widthCard
                  : -0.01 * heightCard,
                left: this.state.isPortrait
                  ? 0.06 * heightCard
                  : 0.06 * widthCard,
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          ) : (
            <View
              style={{
                width: this.state.isPortrait
                  ? heightCard * 0.095
                  : widthCard * 0.1,
                height: this.state.isPortrait
                  ? heightCard * 0.1
                  : widthCard * 0.1,
                borderRadius: this.state.isPortrait
                  ? width * 0.007
                  : width * 0.005,
                top: this.state.isPortrait
                  ? -0.03 * widthCard
                  : -0.01 * heightCard,
                left: this.state.isPortrait
                  ? 0.06 * heightCard
                  : 0.06 * widthCard,
                backgroundColor: "#036194",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={[
                  styles.imageCrown,
                  {
                    top: this.state.isPortrait
                      ? -0.02 * widthCard
                      : -0.02 * widthCard,
                    width: this.state.isPortrait
                      ? 0.065 * widthCard
                      : 0.075 * widthCard,
                    height: this.state.isPortrait
                      ? 0.032 * widthCard
                      : 0.045 * widthCard,
                  },
                ]}
                source={require("../../image/crown.png")}
              />
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: (0.035 * width) / 2,
                  fontWeight: "bold",
                }}
              >
                {index}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </ImageBackground>
    );
  }
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
    width: 15,
    height: 10,
    resizeMode: "cover",
    position: "absolute",
  },
});

export default CardLession;
