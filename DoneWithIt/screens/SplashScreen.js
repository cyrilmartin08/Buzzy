import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigates to the Login screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Student vieww/Logo.png')} 
        style={styles.logo} 
        resizeMode="contain" // Ensures the logo scales well
        accessibilityLabel="App Logo" // Improves accessibility
      />
      <Text style={styles.title}>CITECH BUZZ</Text>
      <Text style={styles.subtitle}>Never miss updates!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16, // Adds some spacing on smaller devices
  },
  logo: {
    width: 180, // Slightly increased for better visibility
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 32, // Slightly larger for emphasis
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18, // Slightly larger for readability
    color: '#FFD700',
    marginTop: 10,
    textAlign: 'center',
  },
});
