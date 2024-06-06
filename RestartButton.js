import React from 'react';
import { TouchableOpacity, Text ,StyleSheet} from 'react-native';

const RestartButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Restart Game</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    },
    buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    },
   })

export default RestartButton;