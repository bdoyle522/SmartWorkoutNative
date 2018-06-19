import React, { Component } from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';

const FavoritesTab = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.description}> Test Text </Text>
      </View>
  );
}

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});

module.exports = {
  FavoritesTab
}