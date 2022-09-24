#!/usr/bin/env node
import readlineSync from 'readline-sync';

//  Generating Random Number
const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

//  get user name
const getName = () => readlineSync.question('May I have your name? ');

//  check whether the number is Even or no
const checkEven = (value) => {
  const result = value % 2 === 0;
  return result ? 'yes' : 'no';
};

//  get answer from user
const getAnswer = () => readlineSync.question('Your answer: ');

//  check answer for even
const checkAnswer = (random, userAnswer) => checkEven(random) === userAnswer;

//  Game begining
console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

console.log('"yes" if the number is even, otherwise answer "no".');

// implementing game logic
for (let i = 0; i < 3; i += 1) {
  const randomValue = getRandomInt();
  console.log(`Question: ${randomValue}`);
  const answer = getAnswer();
  const result = checkAnswer(randomValue, answer);
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
