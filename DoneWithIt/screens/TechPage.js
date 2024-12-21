import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TechPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tech Updates</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.update}>
          1. New AI-based Learning Platform Launched.
        </Text>
        <Text style={styles.update}>
          2. Robotics Workshop: Registration Open for All Students.
        </Text>
        <Text style={styles.update}>
          3. Hackathon 2024: Join and Win Exciting Prizes.
        </Text>
        <Text style={styles.update}>
          4. TechFest Announcements Coming Soon!
        </Text>
        {/* Add more updates */}
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
