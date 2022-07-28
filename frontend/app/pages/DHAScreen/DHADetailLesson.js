import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Text} from 'react-native';
// import MyBreadcrumb from '../../components/Breadcrumb';
// import CardLesson from '../../components/CardLesson';

class DHADetailLesson extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <MyBreadcrumb />
                    <CardLesson /> */}
          <Text>dhaaaaa</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default DHADetailLesson;
