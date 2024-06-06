import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from './AppContainer';
import useGameStore from './useGameStore';

const App = () => {
  // Define game state and restart function
  const { restartGame } = useGameStore();

  return (
    <View style={styles.container}>
      <AppContainer restartGame={restartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

export default App;