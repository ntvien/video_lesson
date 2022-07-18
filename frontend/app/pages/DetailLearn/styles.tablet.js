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
    zIndex: 1,
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
  ctnTitleContent: {
    alignItems: "center",
  },
  imageBack: {
    width: (0.1 * width) / 3,
    height: (0.1 * width) / 3,
    resizeMode: "cover",
    marginTop: -0.3 * (0.2 * height),
  },
  imageRight: {
    width: 10,
    height: 10,
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
  imageGhim1: {
    width: 0.07 * width,
    height: 0.07 * width,
    resizeMode: "cover",
    position: "absolute",
    zIndex: 1,
  },
  leftColumn: {
    flex: 1,
    height: "80%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  centerColumn: {
    height: "82%",
    borderRightColor: "#036194",
    borderRightWidth: 2,
  },
  rightColumn: {
    flex: 2,
    // backgroundColor: "red"
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
