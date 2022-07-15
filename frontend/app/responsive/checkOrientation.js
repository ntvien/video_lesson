import { Dimensions } from "react-native";

const SCREEN_WIDTH = Math.max(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);
const SCREEN_HEIGHT = Math.min(
  Dimensions.get("screen").width,
  Dimensions.get("screen").height
);

export const isTablet = () => {
  return SCREEN_WIDTH / SCREEN_HEIGHT < 16 / 9;
};

export const isMoible = () => {
  return SCREEN_WIDTH / SCREEN_HEIGHT > 16 / 9;
};
