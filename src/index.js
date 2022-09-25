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

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const failed = (name, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

export const jcdCalculation = (a, b) => {
  let firstValue = a;
  let secondValue = b;
  while (firstValue !== 0 && secondValue !== 0) {
    if (firstValue > secondValue) {
      firstValue %= secondValue;
    } else {
      secondValue %= firstValue;
    }
  }
  return firstValue + secondValue;
};
