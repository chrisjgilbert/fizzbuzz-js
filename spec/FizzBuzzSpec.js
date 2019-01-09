describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz()
  })

  describe('when given a number', function() {

    it('returns Fizz if it is divisible by 3', function() {
      expect(fizzbuzz.play(3)).toBe('Fizz')
    })

    it('returns Fizz if it is divisible by 3', function() {
      expect(fizzbuzz.play(5)).toBe('Buzz')
    })
  })

})
