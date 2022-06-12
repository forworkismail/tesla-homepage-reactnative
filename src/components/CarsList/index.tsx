import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  FlatList,
  Dimensions,
} from 'react-native';
import CarItem from '../CarItem';
import StyledButton from '../StyledButton';
import cars from './cars';
import styles from './styles';

type CarsListProps = {};

const CarsList: React.FC<CarsListProps> = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagLine={item.tagline}
            tagLineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
