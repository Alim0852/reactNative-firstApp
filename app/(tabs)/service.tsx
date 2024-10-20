import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Service = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Our Services</Text>
      <Text style={styles.paragraph}>
        We provide a wide range of services including software development, mobile app design, and consultancy.
      </Text>
      <Text style={styles.serviceItem}>1. Mobile App Development</Text>
      <Text style={styles.serviceItem}>2. Web Development</Text>
      <Text style={styles.serviceItem}>3. Cloud Solutions</Text>
      <Text style={styles.serviceItem}>4. IT Consultancy</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop : 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#666',
  },
  serviceItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3498db',
  },
});

export default Service;
