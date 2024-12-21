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
        {/* Add more updates */}
      </ScrollView>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  update: {
    fontSize: 16,
    marginBottom: 10,
  },
});
//

