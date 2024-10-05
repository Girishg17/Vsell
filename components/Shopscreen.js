import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function ShopScreen() {
    return (
      <View style={styles.centeredView}>
        <Text>Shop Screen</Text>
      </View>
    );
  }

  const styles=StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
  })