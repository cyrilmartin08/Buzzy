import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Student vieww/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>CITECH BUZZ</Text>
      <Text style={styles.subtitle}>Never miss on Updates!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD700',
  },
});
