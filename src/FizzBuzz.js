var FizzBuzz = function() {}

FizzBuzz.prototype = {
  play: function(number) {
    if (this._divisibleBy5(number)) {
      return 'Buzz'
    } else {
      return 'Fizz'
    }
  },

  _divisibleBy5: function(number) {
    if (number % 5 ===0 ) return true
  }
}
