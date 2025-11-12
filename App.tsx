import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Creciente from './components/creciente';

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.texHuge}>{count}</Text>

      <Creciente 
        label="+1" 
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      
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
  }

});
