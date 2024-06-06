import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import useGameStore from './useGameStore';

const StartScreen = () => {

  const {startGame} = useGameStore();

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.row,styles.rowHeight80p]}>
        <Image
          source={require('./pictures/splash_logo.png')}
        />
        </View>
        <View style={[styles.row,styles.rowHeight20p]}>
          <TouchableOpacity style={styles.btn} onPress={startGame}>
            <Text style={styles.btnText}>Let's Play</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077b6',
  },
  row:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  rowHeight80p:{height:'80%'},
  rowHeight20p:{height:'20%'},
  btn:{
    width:'90%',
    paddingVertical:20,
    borderRadius:12,
    backgroundColor:'#fff',
    alignItems:'center',
    borderColor:1,color:'black',
  },
  btnText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#adb5bd',
  }
});
export default StartScreen;