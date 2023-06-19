/// <reference types="cypress"/>


it('google test', function() {

    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('Kasia{enter}')

    cy.contains('Meaning of Kasia').click()
})

it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name=username]').type('admin')
    cy.get('[name=password]').type('admin123')
    cy.get('.oxd-button').click()
    cy.contains('Admin').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()

})  
