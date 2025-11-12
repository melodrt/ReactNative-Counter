import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position?: 'left' | 'right';

  // Methods:
  onPress: () => void;
  onLongPress: () => void;
}

export default function Creciente({ 
  label, 
  onPress, 
  onLongPress,
  position = 'right'	
}: Props) {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
      style={[styles.button, position === 'right' ? styles.positionRight : styles.positionLeft]}
      onPress={onPress}
      onLongPress={onLongPress}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    marginTop:20,
    elevation:3,
    shadowRadius:4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
})