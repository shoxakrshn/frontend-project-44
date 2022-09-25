import randomNumber from '../src/random-number-generator.js';
import {
  greeting,
  getAnswer,
  getName,
  checkAnswer,
  congratulate,
  failed,
  jcdCalculation,
} from '../src/index.js';

export default () => {
  greeting();
  const name = getName();
  console.log('Find the greatest common divisor of given numbers');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber(2, 31);
    const secondNumber = randomNumber(2, 31);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const correctAnswer = jcdCalculation(firstNumber, secondNumber);
    const answer = Number(getAnswer());
    const result = checkAnswer(correctAnswer, answer);
    if (result) {
      console.log('Correct!');
      if (i === 2) {
        congratulate(name);
      }
    } else {
      failed(name, answer, correctAnswer);
      break;
    }
  }
};
