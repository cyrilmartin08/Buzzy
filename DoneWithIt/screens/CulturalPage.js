import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CulturalPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cultural Updates</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.update}>
          1. Annual Cultural Fest: Register for Events.
        </Text>
        <Text style={styles.update}>
          2. Dance Workshop: Learn from the Experts.
        </Text>
        <Text style={styles.update}>
          3. Music Concert: Featuring Local Bands.
        </Text>
        <Text style={styles.update}>
          4. Art Exhibition: Showcasing Student Artworks.
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
