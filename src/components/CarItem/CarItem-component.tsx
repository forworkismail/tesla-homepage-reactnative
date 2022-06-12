import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import styles from './CarItem-style';

type CarItemProps = {
  backgroundImage: string;
  carName: string;
  carPrice: string;
};

const CarItemComponent: React.FC<CarItemProps> = ({
  backgroundImage,
  carName,
  carPrice,
}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../../assets/images/Model3.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{carName}</Text>
        <Text style={styles.subtitle}>Starting at ${carPrice}</Text>
      </View>
    </View>
  );
};

export default CarItemComponent;
