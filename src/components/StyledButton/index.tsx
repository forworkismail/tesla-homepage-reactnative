import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import styles from './styles';

type StyledButtonProps = {
  type: 'primary' | 'secondary';
  text: string;
  onPress: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({ type, text, onPress }) => {
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
