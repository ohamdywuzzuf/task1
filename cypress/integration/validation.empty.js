describe('Sign up form validate', function() {
    it('Visit sign up form', function() {
    cy.visit("register");
//visit login page
//    it('Click on each field for empty input', function() {
        cy.get('input[name=firstname]').click()
        cy.get('input[name=lastname]').click()
        cy.get('input[name=email]').click()
        cy.get('input[name=password]').click()
//click on form to deselect password from previous field
        cy.get('.css-1rj4u4i').click()
//    it('Check for validation message'), function() {
//    it("Check for validation message", function() {
        cy.get(':nth-child(1) > .css-y0dsrb').should('have.text', 'Please enter your first name.')
        cy.get(':nth-child(2) > .css-y0dsrb').should('have.text', 'Please enter your last name.')
        cy.get(':nth-child(3) > .css-y0dsrb').should('have.text', 'Please enter your email address')
        cy.get(':nth-child(4) > .css-y0dsrb').should('have.text', 'Please enter your password .')
})
})
//})
//})