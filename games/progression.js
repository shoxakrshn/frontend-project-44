import randomNumber from '../src/random-number-generator.js';
import {
  greeting,
  getAnswer,
  getName,
  checkAnswer,
  congratulate,
  failed,
} from '../src/index.js';

export default () => {
  greeting();
  const name = getName();
  console.log('What number is missing in the progression?');
  const arraySize = randomNumber(5, 11);

  for (let i = 0; i < 3; i += 1) {
    const step = randomNumber(1, 5);
    const sequence = [];
    const hiddenValue = randomNumber(1, arraySize);
    let counter = 0;

    for (let j = 0; j < arraySize; j += 1) {
      counter += step;
      sequence.push(counter);
    }

    const copySequence = [...sequence];
    copySequence[hiddenValue] = '..';
    const correctAnswer = sequence[hiddenValue];
    console.log(`Question: ${copySequence.join(' ')}`);
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
