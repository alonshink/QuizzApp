import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import useGameStore from './useGameStore';

const GameScreen = () => {
  const { currentQuestionIndex, questions, handleAnswer } = useGameStore();
  const currentQuestion = questions[currentQuestionIndex];
  const difficulty = currentQuestion.difficulty;
  let color = '#000'; // Default color
  
  switch (difficulty) {
    case 'easy':
      color = '#a7c957';
      break;
    case 'medium':
      color = '#ff7d00';
      break;
    case 'hard':
      color = '#0466c8';
      break;
  }

  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    setTimeLeft(30);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false); // Proceed to the next question
    }
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.rowHeight10p]}>
        <Text style={[styles.fontQuestion]}>Question {currentQuestionIndex + 1}/20</Text>
        <Image style={styles.logo} source={require('./pictures/logo.png')} />
      </View>
      <View style={styles.rowHeight10p}>
        <Text>Level: <Text style={{ color }}>{currentQuestion.difficulty}</Text></Text>
      </View>
      <View style={styles.rowHeight20p}>
        <Text>{currentQuestion.question}</Text>
      </View>
      <View>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleAnswer(option === currentQuestion.correct_answer)}>
            <Text style={[styles.row, styles.rowWidth]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.timerContainer}>
        <View style={[styles.timer, { backgroundColor: '#0466c8' }]}>
          <Text style={styles.timerText}>{timeLeft}</Text>
        </View>
        <Text style={styles.timerLabelText}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#00798c',
    marginBottom: 15,
  },
  rowWidth: {
    width: '100%',
  },
  rowHeight10p: {
    height: '10%',
  },
  rowHeight20p: {
    height: '20%',
  },
  logo: {
    height: 60,
    width: 60,
    marginLeft: 'auto', // Pushes the logo to the right
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  timer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0466c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 16,
    color: '#fff', 
  },
  timerLabelText: {
    fontSize: 16,
    marginLeft: 10,
  },
  fontQuestion:{
    fontSize:25,
    color:'#f1faee'
  },
});

export default GameScreen;