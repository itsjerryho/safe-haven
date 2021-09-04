import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const LoadingScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>We are connecting you to one of our friendly consultants..</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
