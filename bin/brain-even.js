#!/usr/bin/env node
import readlineSync from 'readline-sync';

//  Generating Random Number
const getRandomInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

//  get user name
const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

//  check whether the number is Even or no
const isEven = (value) => {
  if (value % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

//  get answer from user
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

//  check answer for even
const checkAnswer = (random, userAnswer) => isEven(random) === userAnswer;

//  Game begining
console.log('Welcome to the Brain Games!');
const name = getName();

console.log('"yes" if the number is even, otherwise answer "no".');

// implementing game logic
let i = 0;

while (i < 3) {
  const randomValue = getRandomInt();
  console.log(`Question: ${randomValue}`);
  const answer = getAnswer();

  if (answer !== 'yes' && answer !== 'no') {
    console.log('Error type of answer');
    break;
  }

  const result = checkAnswer(randomValue, answer);

  if (result) {
    console.log('Correct!');
    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
