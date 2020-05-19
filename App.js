import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tripsnav from './nav/tripsnav';

export default function App() {
  return (
    <Tripsnav></Tripsnav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
