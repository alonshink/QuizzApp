import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php?amount=20&category=18';

const useGameStore = create((set) => ({
  isGameStarted: false,
  isGameOver: false,
  counter: 0,
  currentQuestionIndex: 0,
  questions: [],
  startGame: async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      const questions = data.results.map((question) => ({
        ...question,
        options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
      }));
      set({ isGameStarted: true, questions });
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  },
  handleAnswer: (isCorrect) =>
    set((state) => ({
      counter: isCorrect ? state.counter + 1 : state.counter,
      currentQuestionIndex:
        state.currentQuestionIndex < state.questions.length - 1 ? state.currentQuestionIndex + 1 : state.currentQuestionIndex,
      isGameOver: state.currentQuestionIndex >= state.questions.length - 1,
    })),
  restartGame: () =>
    set({
      isGameStarted: false,
      isGameOver: false,
      counter: 0,
      currentQuestionIndex: 0,
      questions: [],
    }),
}));

export default useGameStore;
