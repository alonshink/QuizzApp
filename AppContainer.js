import React from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import WinScreen from './WinScreen';
import LoseScreen from './LoseScreen';
import useGameStore from './useGameStore';

const AppContainer = () => {
  const { isGameStarted, isGameOver, counter, restartGame } = useGameStore();

  console.log('isGameStarted: ' + isGameStarted);

  const handleRestart = () => {
    // Call restartGame function to reset game state
    restartGame();
  };

  return (
    <View style={styles.container}>
      {!isGameStarted && <StartScreen />}
      {isGameStarted && !isGameOver && <GameScreen />}
      {isGameOver && counter >= 15 && <WinScreen restartGame={handleRestart} />}
      {isGameOver && counter < 15 && <LoseScreen restartGame={handleRestart} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppContainer;