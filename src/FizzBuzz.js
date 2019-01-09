var FizzBuzz = function() {}

FizzBuzz.prototype = {
  play: function(number) {
    if (this._divisibleBy15(number)) {
      return 'FizzBuzz'
    } else if (this._divisibleBy5(number)) {
      return 'Buzz'
    } else if (number % 3 === 0) {
      return 'Fizz'
    } else {
      return number
    }
  },

  _divisibleBy5: function(number) {
    if (number % 5 === 0) return true
  },

  _divisibleBy15: function(number) {
    if (number % 15 === 0) return true
  }
}
