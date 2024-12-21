import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>

      {/* Button for Tech Page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TechScreen')}
      >
        <Text style={styles.buttonText}>Tech</Text>
      </TouchableOpacity>

      {/* Button for Cultural Page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CulturalScreen')}
      >
        <Text style={styles.buttonText}>Cultural</Text>
      </TouchableOpacity>

      {/* Button for Sports Page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SportsScreen')}
      >
        <Text style={styles.buttonText}>Sports</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d3d3d3',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
