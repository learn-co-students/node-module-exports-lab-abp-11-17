'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker

const Icebreakers = require('./Question.js')
