describe('FizzBuzz', function() {

  describe('when given a number', function() {
    it('returns Fizz if it is divisible by 3', function() {
      var fizzbuzz = new FizzBuzz()
      expect(fizzbuzz.play(3)).toBe('Fizz')
    })
  })

})
