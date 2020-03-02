/// <reference types="Cypress" />

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // in Cypress, cy.get acts like findElement in Selenium
        cy.get('.search-keyword').type('ca')
        // inserting waits allows time for elements to load
        cy.wait(2000)
        // .product is the css selector :visible selects the objects with that selector that are visible
        cy.get('.product:visible').should('have.length', 4)
    })
})