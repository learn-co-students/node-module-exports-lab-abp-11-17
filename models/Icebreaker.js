'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

const questiom = require('./Question.js')
module.exports = Icebreaker
