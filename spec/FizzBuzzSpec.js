describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz()
  })

  describe('when given a number', function() {

    it('returns Fizz if it is divisible by 3', function() {
      expect(fizzbuzz.play(3)).toBe('Fizz')
    })

    it('returns Fizz if it is divisible by 5', function() {
      expect(fizzbuzz.play(5)).toBe('Buzz')
    })

    it('returns FizzBuzz if it is divisible by 15', function() {
      expect(fizzbuzz.play(15)).toBe('FizzBuzz')
    })
  })

})
