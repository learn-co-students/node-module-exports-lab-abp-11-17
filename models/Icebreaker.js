'use strict';

// const Question = require('models/Question.js')
const Question = require('Question.js');

class Icebreaker{
  question(){
    Question.Find()
  }
}


module.exports = Icebreaker
