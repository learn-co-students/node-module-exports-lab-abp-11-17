'use strict';

class Icebreaker{
  question(){
    const Question = require('./Question.js')
    Question.Find()
  }
}

module.exports = Icebreaker;
