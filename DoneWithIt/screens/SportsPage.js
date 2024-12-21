import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SportsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sports Updates</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.update}>
          1. Inter-College Football Tournament Announced.
        </Text>
        <Text style={styles.update}>
          2. Basketball Team Tryouts Next Week.
        </Text>
        <Text style={styles.update}>
          3. Annual Sports Meet: Register Now.
        </Text>
        <Text style={styles.update}>
          4. Cricket Coaching Camp: Enroll Today!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    paddingBottom: 20,
  },
  update: {
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
});
