import { Dimensions } from 'react-native';
import { useOrientation } from '../hooks/useOrientation';

// import DeviceInfo from 'react-native-device-info';

// const IPHONE6_SCREEN_WIDTH = 375;
// const IPHONE6_SCREEN_HEIGHT = 667;

const SCREEN_WIDTH = Math.max(Dimensions.get("screen").width, Dimensions.get("screen").height);
const SCREEN_HEIGHT = Math.min(Dimensions.get("screen").width, Dimensions.get("screen").height);
// const orientation = useOrientation();

console.log(SCREEN_WIDTH)
console.log(SCREEN_HEIGHT)
// export const isTablet = DeviceInfo.getDeviceType() !== 'Handset';

export const isTablet = () => {
    if (SCREEN_WIDTH / SCREEN_HEIGHT < 16 / 9) {
        return true;
    }
}

export const isMoible = () => {
    if (SCREEN_WIDTH / SCREEN_HEIGHT > 16 / 9) {
        return true;
    }
}

// export const scaleWidth = (width) => {
//     if (isTablet) {
//         return width;
//     }
//     return Dimensions.get('screen').width / SCREEN_WIDTH * width;
// };

// export const scaleHeight = (height) => {
//     if (isTablet) {
//         return height;
//     }
//     return Dimensions.get('screen').width / SCREEN_WIDTH * height;
// };

// export const scaleX = scaleWidth;

// export const scaleY = (height) =>
//     Dimensions.get('screen').height / SCREEN_HEIGHT * height;