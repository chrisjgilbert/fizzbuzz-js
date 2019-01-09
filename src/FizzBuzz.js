var FizzBuzz = function() {}

FizzBuzz.prototype = {
  play: function(number) {
    if (number % 5 === 0) {
      return 'Buzz'
    } else {
      return 'Fizz'
    }
  }
}
