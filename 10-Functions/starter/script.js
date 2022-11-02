'use strict';
// Functions returning functions
const greet = greeting => {
  return function (name) {
    //console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Alex');

// Coding Challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    // We display the fucking question
    const answer = prompt(
      `${this.question}\n${this.options.join('\n')}\nWrite option number`
    );
    // We check is answer, if ok we increase the array
    if (answer >= 0 && answer < this.answers.length) {
      this.answers[answer] += 1;
      this.displayResult('string');
    }
  },
  displayResult: function (type = 'array') {
    if (type === 'string') {
      console.log(`The result is ${this.answers.join(',')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

const button = document.querySelector('.poll');
button.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 1] });
