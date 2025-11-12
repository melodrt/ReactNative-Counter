import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native/types_generated/index';

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.texHuge}>{count}</Text>
      <Pressable
      style={styles.button}
      onPress={() => setCount(count + 1)}
      onLongPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texHuge: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    marginTop:20,
    elevation:3,
    shadowRadius:4,
  }

});
