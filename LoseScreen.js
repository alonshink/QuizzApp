import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RestartButton from './RestartButton';

const LoseScreen = ({ restartGame }) => {
  const handleRestart = () => {
    restartGame();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.rowHeight10p, styles.right]}>
        <Image style={[styles.img]} source={require('./pictures/logo.png')} />
      </View>
      <View style={[styles.row, styles.rowHeight20p]}>
        <Text style={styles.txt_f}>FAILED</Text>
      </View>
      <View style={[styles.row, styles.rowHeight10p]}>
        <Text style={styles.txt}>you need to answer{'\n'}15 correct answers</Text>
      </View>
      <View style={[styles.row, styles.rowHeight60p]}>
        <Image source={require('./pictures/failed_character.png')} />
      </View>
      <RestartButton onPress={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: { width: '100%', backgroundColor: '#c1121f', padding: 10 },
  rowHeight10p: { height: '10%' },
  rowHeight30p: { height: '20%' },
  rowHeight60p: { height: '60%' },
  txt_f: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#c1121f',
  },
  txt: {
    fontSize: 30,
    color: '#adb5bd',
  },
  img: {
    height: 60,
    width: 60,
    marginLeft: 'auto',
  },
});

export default LoseScreen;