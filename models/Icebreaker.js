'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

const Question = require("model/Question.js");

module.exports = Icebreaker;
