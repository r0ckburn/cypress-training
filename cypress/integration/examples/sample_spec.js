// the line below is required to enable intellisense in cypress tests
/// <reference types="Cypress" />

// cypress tests use the describe > it > expect pattern
describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
    it('Does not do much (fail)!', function() {
      expect(true).to.equal(false)
    })
  })