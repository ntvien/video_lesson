import React, {useState, useEffect, useRef, Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Button,
  LogBox,
  Alert,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import {isTablet} from '../responsive/checkOrientation';
import {useOrientation} from '../../hooks/useOrientation';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

LogBox.ignoreAllLogs(true);

class CardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      screenInfo: Dimensions.get('screen'),
      isPortrait:
        Dimensions.get('screen').width < Dimensions.get('screen').height,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onChange);
  };
  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onChange);
  };
  onChange = res => {
    this.setState({
      screenInfo: res.screen,
      isPortrait: res.screen.height > res.screen.width,
    });
  };

  render() {
    const {item, index} = this.props;
    return isTablet() ? (
      // Check and handle device is Tablet
      <View
        style={{
          width: '50%',
          height: '100%',
          marginRight: 30,
          //   backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(item.Name);
          }}>
          <View
            style={{
              width: this.state.isPortrait ? height * 0.03 : width * 0.2,
              height: this.state.isPortrait ? height * 0.03 : width * 0.21,
              backgroundColor: '#80808038',
              borderRadius: this.state.isPortrait
                ? height * 0.03
                : width * 0.03,
              left: this.state.isPortrait ? height * 0.03 : width * 0.008,
              top: this.state.isPortrait ? height * 0.03 : width * 0.008,
            }}></View>
          <View
            style={{
              width: this.state.isPortrait ? height * 0.03 : width * 0.2,
              height: this.state.isPortrait ? height * 0.03 : width * 0.2,
              backgroundColor: item.ColorBackground,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: this.state.isPortrait
                ? height * 0.03
                : width * 0.02,
              position: 'absolute',
            }}>
            <Image
              style={{
                width: this.state.isPortrait ? '80%' : '80%',
                height: this.state.isPortrait ? '80%' : '80%',
              }}
              source={{
                uri: item.Image,
              }}
              resizeMode="contain"></Image>
            <Text
              style={{
                fontSize: this.state.isPortrait ? height * 0.03 : width * 0.02,
                color: '#ffffff',
                fontWeight: 'bold',
              }}>
              {item.Title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      // Check and handle device is Mobile
      <View
        style={{
          width: this.state.isPortrait ? height : width,
          height: this.state.isPortrait ? width : height,
          backgroundColor: 'ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: this.state.isPortrait ? 'column' : 'row',
        }}>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Learn');
          }}
          title="Video Lesson"
          color="#B792DD"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate(item.Name);
          }}
          title="ITS"
          color="blue"
        />
      </View>
    );
  }
}

// function Home({navigation}) {
//   // disable warning display in debug
//   console.disableYellowBox = true;
//   LogBox.ignoreAllLogs(true);
//   const orientation = useOrientation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="white" translucent={true} hidden={true} />
//       {isTablet() ? (
//         // Check and handle device is Tablet
//         <View
//           style={{
//             width: this.state.isPortrait ? height : width,
//             height: this.state.isPortrait ? width : height,
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: this.state.isPortrait ? 'column' : 'row',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Learn');
//             }}>
//             <View
//               style={{
//                 width: this.state.isPortrait ? height * 0.03 : width * 0.2,
//                 height: this.state.isPortrait ? height * 0.03 : width * 0.1,
//                 backgroundColor: 'grey',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: this.state.isPortrait
//                   ? height * 0.03
//                   : width * 0.02,
//                 left: 10,
//                 top: 10,
//               }}></View>
//             <View
//               style={{
//                 width: this.state.isPortrait ? height * 0.03 : width * 0.2,
//                 height: this.state.isPortrait ? height * 0.03 : width * 0.1,
//                 backgroundColor: '#B792DD',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: this.state.isPortrait
//                   ? height * 0.03
//                   : width * 0.02,
//                 position: 'absolute',
//               }}>
//               <Text
//                 style={{
//                   fontSize: this.state.isPortrait
//                     ? height * 0.03
//                     : width * 0.02,
//                   color: '#ffffff',
//                   fontWeight: 'bold',
//                 }}>
//                 Video Lesson
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <View
//             style={{
//               width: this.state.isPortrait ? height * 0.01 : width * 0.03,
//             }}></View>

//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('ITSScreen');
//             }}>
//             <View
//               style={{
//                 width: this.state.isPortrait ? height * 0.03 : width * 0.2,
//                 height: this.state.isPortrait ? height * 0.03 : width * 0.1,
//                 backgroundColor: 'blue',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: this.state.isPortrait
//                   ? height * 0.03
//                   : width * 0.02,
//               }}>
//               <Text
//                 style={{
//                   fontSize: this.state.isPortrait
//                     ? height * 0.03
//                     : width * 0.02,
//                   color: '#ffffff',
//                   fontWeight: 'bold',
//                 }}>
//                 ITS
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         // Check and handle device is Mobile
//         <View
//           style={{
//             width: this.state.isPortrait ? height : width,
//             height: this.state.isPortrait ? width : height,
//             backgroundColor: 'ffffff',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: this.state.isPortrait ? 'column' : 'row',
//           }}>
//           <Button
//             onPress={() => {
//               this.props.navigation.navigate('Learn');
//             }}
//             title="Video Lesson"
//             color="#B792DD"
//           />
//           <Button
//             onPress={() => {
//               this.props.navigation.navigate('ITSScreen');
//             }}
//             title="ITS"
//             color="blue"
//           />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: height,
  },
});

export default CardContent;
