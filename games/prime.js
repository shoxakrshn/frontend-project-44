import randomNumber from '../src/random-number-generator.js';
import {
  greeting,
  getAnswer,
  getName,
  checkAnswer,
  congratulate,
  failed,
  isPrime,
} from '../src/index.js';

export default () => {
  greeting();
  const name = getName();
  console.log('"yes" if given number is prime. Otherwise answer "no".');
  const checkPrime = (value) => {
    const result = isPrime(value);
    return result ? 'yes' : 'no';
  };

  for (let i = 0; i < 3; i += 1) {
    const randomValue = randomNumber(1, 31);
    console.log(`Question: ${randomValue}`);
    const correctAnswer = checkPrime(randomValue);
    const answer = getAnswer();
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
