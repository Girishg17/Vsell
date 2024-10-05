
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLeft}>Vsell</Text>
      <Text style={styles.hamburger}>☰</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hamburger: {
    fontSize: 24,
  },
});
