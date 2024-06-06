import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RestartButton from './RestartButton';

const WinScreen = ({ restartGame }) => {
  const handleRestart = () => {
    restartGame();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.rowHeight10p]}>
        <Image style={[styles.img]} source={require('./pictures/logo.png')} />
      </View>
      <View style={[styles.row, styles.rowHeight20p]}>
        <Text style={styles.txt_f}>GREAT JOB</Text>
      </View>
      <View style={[styles.row, styles.rowHeight10p]}>
        <Text style={styles.txt}>You answered all{'\n'}the questions correctly</Text>
      </View>
      <View style={[styles.row, styles.rowHeight60p]}>
        <Image source={require('./pictures/success_character.png')} />
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
  rowHeight10p: { height: '10%' },
  rowHeight30p: { height: '20%' },
  rowHeight60p: { height: '60%' },
  txt_f: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#a7c957',
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

export default WinScreen;