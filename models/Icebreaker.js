'use strict';

const Question = require('models/Question.js');


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker;
