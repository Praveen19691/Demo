/// <reference types="Cypress" />
describe('My first test suite', () => {
    it('my first test', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        cy.get('.products .product').should('have.length', 4)
        cy.get('.products .product').eq(2).contains("ADD TO CART").click()

        console.log('====>', cy.get('.products .product'))

        cy.get('.products').as('productLocator')

        cy.get('.products .product').each(($el) => {
            const text = $el.find('h4.product-name').text()
            if(text.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })
    })
})