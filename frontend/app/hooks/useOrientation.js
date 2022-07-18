import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
export const useOrientation = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get("window"));
  useEffect(() => {
    const onChange = (res) => {
      setScreenInfo(res.screen);
    };
    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener("change", onChange);
  }, []);
  return {
    ...screenInfo,
    isPortrait: screenInfo.height > screenInfo.width,
  };
};
