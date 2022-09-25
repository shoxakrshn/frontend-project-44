import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = () => readlineSync.question('Your answer: ');
export const checkAnswer = (corectAnswer, userAnswer) => corectAnswer === userAnswer;
