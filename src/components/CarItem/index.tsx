import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

type CarItemProps = {
  backgroundImage: string;
  carName: string;
  carPrice: string;
};

const CarItem: React.FC<CarItemProps> = ({
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

      <StyledButton
        type="primary"
        text="Custom Order"
        onPress={() => {
          console.warn('Custom Order');
        }}
      />
      <StyledButton
        type="secondary"
        text="Existing Inventory"
        onPress={() => {
          console.warn('Existing Inventory');
        }}
      />
    </View>
  );
};

export default CarItem;
