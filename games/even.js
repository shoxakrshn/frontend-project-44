import randomNumber from '../src/random-number-generator.js';
import {
  greeting,
  getAnswer,
  getName,
  checkAnswer,
} from '../src/index.js';

export default () => {
  greeting();
  const name = getName();
  console.log('"yes" if the number is even, otherwise answer "no".');

  //  check whether the number is Even or no
  const checkEven = (value) => {
    const result = value % 2 === 0;
    return result ? 'yes' : 'no';
  };

  // implementing game logic
  for (let i = 0; i < 3; i += 1) {
    const randomValue = randomNumber(1, 31);
    const correctAnswer = checkEven(randomValue);
    console.log(`Question: ${randomValue}`);
    const answer = getAnswer();
    const result = checkAnswer(correctAnswer, answer);
    if (result) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkEven(randomValue)}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
