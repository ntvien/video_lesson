import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Dimensions } from "react-native";

const width = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const height = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  backgroundHeader: {
    position: "relative",
    width: "100%",
    backgroundColor: "#00000033",
    zIndex: -1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBgHeader: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ctnImgBack: {
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },
  imageBack: {
    width: (0.1 * width) / 3,
    height: (0.1 * width) / 3,
    resizeMode: "cover",
    marginTop: -0.3 * (0.2 * height),
  },
  ctnTitleContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  imageRight: {
    marginHorizontal: 0.03 * width,
    resizeMode: "contain",
  },
  backgroundFake: {
    position: "absolute",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    bottom: 0,
    width: "100%",
    backgroundColor: "#B792DD",
    height: "30%",
    zIndex: 1,
  },
  imageGhim: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "cover",
    position: "absolute",
    zIndex: 1,
  },
  styleRectangle: {
    backgroundColor: "#35ABEB",
    borderWidth: width * 0.0075,
    borderColor: "#ffffff",
    borderRadius: width * 0.035,
    position: "absolute",
  },
  styleRectangle1: {
    backgroundColor: "#35ABEB",
    borderWidth: width * 0.01,
    borderColor: "#ffffff",
    borderRadius: width * 0.08,
    transform: [{ rotate: "3.5deg" }],
    position: "absolute",
  },
  viewContentScroll: {
    height: "100%",
    width: 10,
    backgroundColor: "#9FBECC99",
    borderRadius: 8,
  },
  viewContentTotalScroll: {
    width: 10,
    borderRadius: 8,
    backgroundColor: "#036194E6",
  },
});
