import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItemComponent from './src/components/CarItem/CarItem-component';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItemComponent
        carName="Model3"
        carPrice={'30,420'}
        backgroundImage="./assets/images/model3.jpg"
      />
      {/* <CarItemComponent
        carName="ModelX"
        carPrice={'30,420'}
        backgroundImage="ModelX"
      />
      <CarItemComponent
        carName="ModelS"
        carPrice={'69,420'}
        backgroundImage="ModelS"
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
