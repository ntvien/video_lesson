import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
// import MyBreadcrumb from '../../components/Breadcrumb';
// import CardSesion from '../../components/CardSession';

const DHALearn = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <MyBreadcrumb />
                <CardSesion navigation={navigation} /> */}

        <Text>dha</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 30,
  },
  contentContainer: {
    paddingVertical: 10,
  },
});

export default DHALearn;
