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
import imageRightLabel from "../../image/rightLabel.png";
import imageLeftLabel from "../../image/leftLabel.png";
import progressBar from "../../image/progressBar.png";
import { isTablet } from "../../app/responsive/checkOrientation";

const width = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const height = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);

class CardItemDetail extends Component {
  // orientation = useOrientation();
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
      <View
        style={{
          width: this.state.isPortrait ? "70%" : "70%",
          height: this.state.isPortrait ? "20%" : "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <ImageBackground
              style={styles.container}
              source={imageBackgroundCard}
              resizeMode="cover"
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 0.3,
                  top: this.state.isPortrait ? "-2%" : "-1%",
                }}
              >
                <Image
                  style={{
                    width: 0.04 * width,
                    height: 0.04 * width,
                    resizeMode: "cover",
                    left: this.state.isPortrait
                      ? -0.016 * width
                      : -0.017 * width,
                  }}
                  source={imageLeftLabel}
                ></Image>
                <Image
                  style={{
                    width: 0.04 * width,
                    height: 0.04 * width,
                    resizeMode: "cover",
                    right: this.state.isPortrait
                      ? -0.013 * width
                      : -0.007 * width,
                  }}
                  source={imageRightLabel}
                ></Image>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 3,
                  paddingRight: "8%",
                  paddingLeft: "5%",
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: this.state.isPortrait
                        ? (0.05 * width) / 4
                        : (0.055 * width) / 4,
                      top: this.state.isPortrait
                        ? -0.003 * width
                        : -0.007 * width,
                    },
                  ]}
                >
                  {item.Title}
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    borderRadius: 20,
                    top: this.state.isPortrait
                      ? -0.003 * width
                      : -0.006 * width,
                  }}
                >
                  <Image
                    style={styles.imageLesson}
                    source={{ uri: item.ImageBackground }}
                  />
                  <Image
                    style={[styles.imageLesson, { position: "absolute" }]}
                    source={{ uri: item.Image }}
                  />
                </View>
              </View>

              {index == 0 ? (
                <View
                  style={{
                    width: "17%",
                    height: "15%",
                    borderRadius: 7,
                    top: "-12%",
                    left: "10%",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
              ) : (
                <View
                  style={{
                    width: "17%",
                    height: "15%",
                    borderRadius: 7,
                    top: "-12%",
                    left: "10%",
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
                        top: "-25%",
                        width: this.state.isPortrait
                          ? 0.013 * width
                          : 0.02 * width,
                        height: this.state.isPortrait
                          ? 0.008 * width
                          : 0.012 * width,
                      },
                    ]}
                    source={require("../../image/crown.png")}
                  />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: this.state.isPortrait
                        ? 0.013 * width
                        : 0.02 * width,
                      fontWeight: "bold",
                    }}
                  >
                    {index}
                  </Text>
                </View>
              )}
            </ImageBackground>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 10, color: "#036194", fontWeight: "700" }}>
              {item.Percent + "%"}
            </Text>
            <View style={{ width: "100%" }}>
              <Image
                style={{
                  width: "100%",
                  height: this.state.isPortrait ? 0.02 * height : 0.03 * height,
                  resizeMode: "cover",
                }}
                source={progressBar}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    ) : (
      <View
        style={{
          width: this.state.isPortrait ? "70%" : "67%",
          height: this.state.isPortrait ? "20%" : "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <ImageBackground
              style={styles.container}
              source={imageBackgroundCard}
              resizeMode="stretch"
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 0.3,
                  top: this.state.isPortrait ? "-2%" : "-1%",
                }}
              >
                <Image
                  style={{
                    width: 0.04 * width,
                    height: 0.04 * width,
                    resizeMode: "cover",
                    left: this.state.isPortrait
                      ? -0.016 * width
                      : -0.017 * width,
                  }}
                  source={imageLeftLabel}
                ></Image>
                <Image
                  style={{
                    width: 0.04 * width,
                    height: 0.04 * width,
                    resizeMode: "cover",
                    right: this.state.isPortrait
                      ? -0.013 * width
                      : -0.007 * width,
                  }}
                  source={imageRightLabel}
                ></Image>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 3,
                  paddingRight: "8%",
                  paddingLeft: "5%",
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: this.state.isPortrait
                        ? (0.03 * width) / 4
                        : (0.047 * width) / 4,
                    },
                  ]}
                >
                  {item.Title}
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={styles.imageLesson}
                    source={{ uri: item.ImageBackground }}
                  />
                  <Image
                    style={[styles.imageLesson, { position: "absolute" }]}
                    source={{ uri: item.Image }}
                  />
                </View>
              </View>

              {index == 0 ? (
                <View
                  style={{
                    width: this.state.isPortrait ? "23%" : "17%",
                    height: this.state.isPortrait ? "17%" : "17%",
                    borderRadius: 6,
                    top: "-10%",
                    left: "10%",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
              ) : (
                <View
                  style={{
                    width: this.state.isPortrait ? "23%" : "17%",
                    height: this.state.isPortrait ? "17%" : "17%",
                    borderRadius: 6,
                    top: "-10%",
                    left: "10%",
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
                        top: "-25%",
                        width: this.state.isPortrait
                          ? 0.012 * width
                          : 0.02 * width,
                        height: this.state.isPortrait
                          ? 0.008 * width
                          : 0.012 * width,
                      },
                    ]}
                    source={require("../../image/crown.png")}
                  />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: this.state.isPortrait
                        ? 0.013 * width
                        : 0.02 * width,
                      fontWeight: "bold",
                    }}
                  >
                    {index}
                  </Text>
                </View>
              )}
            </ImageBackground>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 10, color: "#036194", fontWeight: "700" }}>
              {item.Percent + "%"}
            </Text>
            <View style={{ width: "100%" }}>
              <Image
                style={{
                  width: "100%",
                  height: this.state.isPortrait
                    ? 0.02 * height
                    : 0.036 * height,
                  resizeMode: "cover",
                }}
                source={progressBar}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    );
  }
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
    flex: 0.8,
  },
  imageCrown: {
    top: "-25%",
    width: 15,
    height: 10,
    resizeMode: "cover",
    position: "absolute",
  },
});

export default CardItemDetail;
