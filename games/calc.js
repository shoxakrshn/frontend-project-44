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
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber(0, 11);
    const secondNumber = randomNumber(0, 11);
    const listOfOperators = ['+', '-', '*'];
    const randomOperator = randomNumber(0, 3);
    let result;
    switch (listOfOperators[randomOperator]) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      default:
        result = 'Error';
    }

    console.log(`Question: ${firstNumber} ${listOfOperators[randomOperator]} ${secondNumber}`);
    const userAnswer = Number(getAnswer());
    const finalResult = checkAnswer(result, userAnswer);
    if (finalResult) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
