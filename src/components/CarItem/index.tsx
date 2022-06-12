import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

type CarItemProps = {
  name: string;
  tagLine: string;
  tagLineCTA?: string;
  image: ImageSourcePropType;
};

const CarItem: React.FC<CarItemProps> = ({
  name,
  tagLine,
  image,
  tagLineCTA,
}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}&nbsp;
          <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;
