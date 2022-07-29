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
  FlatList,
} from 'react-native';
import {isTablet} from '../../responsive/checkOrientation';
import {useOrientation} from '../../hooks/useOrientation';
import CardContent from '../../components/CardContent';
import {dataHome} from '../../../data/dataHome';

const width = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
const height = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

LogBox.ignoreAllLogs(true);

function Home({navigation}) {
  // disable warning display in debug
  console.disableYellowBox = true;
  LogBox.ignoreAllLogs(true);
  const orientation = useOrientation();
  const [orientation1, setOrientation] = useState('');

  const getOrientation = () => {
    if (window.height < window.width) {
      setOrientation('LANDSCAPE');
    } else {
      setOrientation('PORTRAIT');
    }
    return orientation1;
  };

  useEffect(() => {
    getOrientation();
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" translucent={true} hidden={true} />
      {isTablet() ? (
        // Check and handle device is Tablet
        <View
          style={{
            width: orientation.isPortrait ? height : width,
            height: orientation.isPortrait ? width : height,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              width: orientation.isPortrait ? height * 0.4 : width * 0.5,
              height: orientation.isPortrait ? width * 0.2 : height * 0.2,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: orientation.isPortrait ? width * 0.05 : height * 0.05,
                fontWeight: 'bold',
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              width: orientation.isPortrait ? height * 0.4 : width * 0.4,
              height: orientation.isPortrait ? width * 0.6 : height * 0.6,
              // backgroundColor: 'blue',
            }}>
            <FlatList
              data={dataHome}
              numColumns={orientation1 == 'LANDSCAPE' ? 4 : 2}
              keyExtractor={item => item}
              key={orientation1}
              renderItem={({item, index}) => (
                <CardContent
                  item={item}
                  index={index}
                  key={index}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </View>
      ) : (
        // Check and handle device is Mobile
        <View
          style={{
            width: orientation.isPortrait ? height : width,
            height: orientation.isPortrait ? width : height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              width: orientation.isPortrait ? height : width * 0.5,
              height: orientation.isPortrait ? width : height * 0.2,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: orientation.isPortrait ? width : height * 0.05,
              }}>
              Home
            </Text>
          </View>

          <View
            style={{
              width: orientation.isPortrait ? height : width * 0.5,
              height: orientation.isPortrait ? width : height * 0.5,
              //   backgroundColor: 'blue',
            }}>
            <FlatList
              data={dataHome}
              numColumns={orientation1 == 'LANDSCAPE' ? 4 : 2}
              keyExtractor={item => item}
              key={orientation1}
              renderItem={({item, index}) => (
                <CardContent
                  item={item}
                  index={index}
                  key={index}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: height,
  },
});

export default Home;
